"""Flag stamp crops whose foreground appears to touch an image edge.

This is a safety check, not an identification system: a flagged crop must be
reviewed against its original page photo. A generous margin is still required.
"""
from pathlib import Path
import sys

from PIL import Image, ImageOps


def edge_contact(path: Path, edge: int = 10, threshold: float = 0.10) -> list[str]:
    image = ImageOps.exif_transpose(Image.open(path).convert("RGB"))
    width, height = image.size
    def foreground(x, y):
        r, g, b = image.getpixel((x, y))
        return (r + g + b) / 3 < 150 or max(r, g, b) - min(r, g, b) > 45
    bands = {
        "top": [(x, y) for y in range(min(edge, height)) for x in range(width)],
        "bottom": [(x, y) for y in range(max(0, height - edge), height) for x in range(width)],
        "left": [(x, y) for x in range(min(edge, width)) for y in range(height)],
        "right": [(x, y) for x in range(max(0, width - edge), width) for y in range(height)],
    }
    return [name for name, band in bands.items() if sum(foreground(x, y) for x, y in band) / max(1, len(band)) >= threshold]


roots = [Path(arg) for arg in sys.argv[1:]] or [Path("data/stamps")]
files = [p for root in roots for p in (root.rglob("*.jpg") if root.is_dir() else [root])]
flagged = []
for file in sorted(files):
    edges = edge_contact(file)
    if edges:
        flagged.append((file, edges))
        print(f"REVIEW {file}: foreground touches {', '.join(edges)} edge(s)")

if flagged:
    print(f"{len(flagged)} crop(s) need review against the original page photo.")
    sys.exit(1)
print(f"Checked {len(files)} crop(s); no likely edge contact detected.")
