# Grandpa's Stamp Album

Local-first gallery for the inherited H. E. Harris Senior Statesman world stamp album.

## Run it

From this directory:

```powershell
python -m http.server 4173
```

Then open http://localhost:4173.

The original photographs remain under `data/raw/Stamp Collection/`. The original inventory is in `data/pages.js`; the completed page-level country/section pass is in `data/page-research.js`. Visible-stamp extraction is in `data/stamps.js`, currently covering Abu Dhabi, Afghanistan, Ajman, and Albania. It includes the printed country/reference illustrations plus visibly populated postage-stamp spaces; empty album spaces are intentionally omitted. Stamp crops are derived from the orientation-corrected originals with a safety margin so the perforated edge can be inspected; the original page image remains available in the fixed-resolution viewer. The browser’s Research mode and Export button can be used to review or back up edits; visible stamp records still need catalogue, condition, and market evidence.
