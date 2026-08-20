// Records are created only for visibly populated stamp spaces or printed
// country/reference illustrations. Blank album spaces are intentionally omitted.
window.STAMP_RECORDS = [
  { id: 'abu-dhabi-country-stamp', pageSequence: 3, country: 'Abu Dhabi', denomination: 'Country stamp / flag illustration', heading: 'Abu Dhabi · 1964–71', image: 'data/stamps/abu-dhabi-flag.jpg?v=2', status: 'reference', notes: 'Printed header illustration; not treated as a mounted postage stamp or valuation candidate.' },
  { id: 'afghanistan-country-stamp', pageSequence: 4, country: 'Afghanistan', denomination: 'Country stamp / flag illustration', heading: 'Afghanistan · 1873–63', image: 'data/stamps/afghanistan-flag.jpg?v=1', status: 'reference', notes: 'Printed header illustration; not treated as a mounted postage stamp or valuation candidate.' },
  { id: 'afghanistan-01', pageSequence: 4, country: 'Afghanistan', denomination: 'Printed album illustration · 2 PS', heading: 'Afghanistan · reference illustration', image: 'data/stamps/afghanistan/afghanistan-01.jpg?v=1', status: 'reference', notes: 'Printed album illustration, not a mounted stamp; excluded from the individual-stamp panel.' },
  { id: 'afghanistan-02', pageSequence: 4, country: 'Afghanistan', denomination: 'Printed album illustration · 1 AF', heading: 'Afghanistan · reference illustration', image: 'data/stamps/afghanistan/afghanistan-02.jpg?v=1', status: 'reference', notes: 'Printed album illustration, not a mounted stamp; excluded from the individual-stamp panel.' },
  { id: 'afghanistan-page5-01', pageSequence: 5, country: 'Afghanistan', denomination: '1 PS · 1962 Asian Games · likely Scott 599', heading: 'Afghanistan · visible stamp 1', image: 'data/stamps/afghanistan/afghanistan-page5-01.jpg?v=1', status: 'visible', notes: 'Provisional match to the 1962 Fourth Asian Games, Jakarta issue. The five-stamp group is likely Scott 599–603; confirm against a current catalogue before sale.', valuation: '$0.10–$1 each · set $0.50–$3', valueConfidence: 'medium' },
  { id: 'afghanistan-page5-02', pageSequence: 5, country: 'Afghanistan', denomination: '2 PS · 1962 Asian Games · likely Scott 600', heading: 'Afghanistan · visible stamp 2', image: 'data/stamps/afghanistan/afghanistan-page5-02.jpg?v=1', status: 'visible', notes: 'Provisional match to the 1962 Fourth Asian Games, Jakarta issue. The five-stamp group is likely Scott 599–603; confirm against a current catalogue before sale.', valuation: '$0.10–$1 each · set $0.50–$3', valueConfidence: 'medium' },
  { id: 'afghanistan-page5-03', pageSequence: 5, country: 'Afghanistan', denomination: '3 PS · 1962 Asian Games · likely Scott 601', heading: 'Afghanistan · visible stamp 3', image: 'data/stamps/afghanistan/afghanistan-page5-03.jpg?v=1', status: 'visible', notes: 'Provisional match to the 1962 Fourth Asian Games, Jakarta issue. The five-stamp group is likely Scott 599–603; confirm against a current catalogue before sale.', valuation: '$0.10–$1 each · set $0.50–$3', valueConfidence: 'medium' },
  { id: 'afghanistan-page5-04', pageSequence: 5, country: 'Afghanistan', denomination: '4 PS · 1962 Asian Games · likely Scott 602', heading: 'Afghanistan · visible stamp 4', image: 'data/stamps/afghanistan/afghanistan-page5-04.jpg?v=1', status: 'visible', notes: 'Provisional match to the 1962 Fourth Asian Games, Jakarta issue. The five-stamp group is likely Scott 599–603; confirm against a current catalogue before sale.', valuation: '$0.10–$1 each · set $0.50–$3', valueConfidence: 'medium' },
  { id: 'afghanistan-page5-05', pageSequence: 5, country: 'Afghanistan', denomination: '5 PS · 1962 Asian Games · likely Scott 603', heading: 'Afghanistan · visible stamp 5', image: 'data/stamps/afghanistan/afghanistan-page5-05.jpg?v=2', status: 'visible', notes: 'Provisional match to the 1962 Fourth Asian Games, Jakarta issue. The five-stamp group is likely Scott 599–603; confirm against a current catalogue before sale.', valuation: '$0.10–$1 each · set $0.50–$3', valueConfidence: 'medium' },
  { id: 'ajman-country-stamp', pageSequence: 6, country: 'Ajman', denomination: 'Country stamp / flag illustration', heading: 'Ajman · 1964–65', image: 'data/stamps/ajman-flag.jpg?v=1', status: 'reference', notes: 'Printed header illustration; not treated as a mounted postage stamp or valuation candidate.' },
  ...[
    ['01', '1 NP'], ['02', '2 NP'], ['03', '3 NP'], ['04', '4 NP'], ['05', '5 NP'],
    ['06', '10 NP'], ['07', '15 NP'], ['08', '20 NP'], ['09', '30 NP'],
    ['10', '15 NP'], ['11', '25 NP'], ['12', '40 NP'], ['13', '1 R'],
    ['14', '35 NP'], ['15', '50 NP'], ['16', '70 NP'], ['17', '1 R'],
    ['18', '75 NP'], ['19', '1 R'], ['20', '150 NP'], ['21', '2 R'],
    ['22', '2 R'], ['23', '3 R']
  ].map(([number, denomination]) => ({
    id: `ajman-${number}`, pageSequence: 6, country: 'Ajman', denomination,
    heading: `Ajman · visible stamp ${number}`,
    image: `data/stamps/ajman/ajman-${number}.jpg?v=1`, status: 'visible',
    notes: 'Visible mounted stamp extracted from the photographed page. Provisional match to Ajman’s 1964–65 fauna/collector-era issues; exact catalogue number and authenticity still need confirmation.',
    valuation: 'Usually under $1 each', valueConfidence: 'low'
  })),
  { id: 'albania-country-stamp', pageSequence: 8, country: 'Albania', denomination: 'Country stamp / flag illustration', heading: 'Albania · 1913–66', image: 'data/stamps/albania-flag.jpg?v=2', status: 'reference', notes: 'Printed header illustration; not treated as a mounted postage stamp or valuation candidate.' },
  ...[
    ['01', '1 L'], ['02', '2 L'], ['03', '3 L'], ['04', '3.50 L'], ['05', '4 L'], ['06', '4.50 L'], ['07', '5 L']
  ].map(([number, denomination]) => ({
    id: `albania-${number}`, pageSequence: 8, country: 'Albania', denomination,
    heading: `Albania · visible stamp ${number}`,
    image: `data/stamps/albania/albania-${number}.jpg?v=2`, status: 'visible',
    notes: 'Provisional match to Albania’s 1965 Flowers issue (Scott 968–975); this page shows seven of the eight values. Perforation and condition should be verified from the original stamp.',
    valuation: '$0.10–$1 each · catalogue refs $0.29–$2.93', valueConfidence: 'medium'
  })),
  ...[
    [13, '1867–1964', ['5 centavos', '5 centavos', '5 centavos', '20 centavos', '20 centavos', '40 centavos', '½ peso', '1 peso', '5 pesos', '10 centavos', '25 centavos', '10 centavos', '20 centavos', '20 centavos', '10 centavos', '80 centavos', '50 centavos official', '1 peso', '2 pesos', '50 centavos', '1 peso', '30 centavos', '40 centavos', '2 pesos', '5 pesos']],
    [14, '1957–67', ['5 centavos official', '10 centavos', '20 centavos', '20 centavos', '1 peso', '2 pesos', '4 pesos', '3 pesos', '5 pesos', '8 pesos', '10 pesos', '1 peso', '2 pesos', '2 pesos', '4 pesos', '4 pesos', '6 pesos', '10 pesos', '12 pesos', '15 pesos', '20 pesos', '22 pesos', '22 pesos', '23 pesos', '25 pesos', '43 pesos', '45 pesos', '50 pesos', '90 pesos', '440 pesos', '240 pesos']],
    [15, '1960–70', ['20 pesos']],
    [16, 'Argentina / Armenia', ['3 pesos', '5 centavos', '20 centavos (Armenia)']]
  ].flatMap(([pageSequence, heading, denominations]) => denominations.map((denomination, index) => ({
    id: `argentina-${pageSequence}-${String(index + 1).padStart(2, '0')}`,
    pageSequence, country: heading === 'Argentina / Armenia' ? 'Argentina / Armenia' : 'Argentina',
    denomination, heading: `Argentina · ${heading} · stamp ${index + 1}`,
    image: `data/stamps/argentina/argentina-${pageSequence}-${String(index + 1).padStart(2, '0')}.jpg?v=1`,
    status: 'visible',
    notes: `Mounted stamp extracted from the photographed Argentina section (${heading}). Identification is provisional; verify issue, perforation, watermark, cancellations, and condition before sale. StampWorld’s Argentina catalogue pages provide a useful comparison point, but catalogue/listing figures are not guaranteed resale prices.`,
    valuation: pageSequence === 13 ? '$0.25–$3 each' : pageSequence === 14 ? '$0.10–$2 each' : '$0.10–$1 each',
    valueConfidence: 'low'
  }))),
  ...[
    [91, ['8,000 old yuan · 1949–50 PRC issue', '$5–$35 each', 'medium'], 'china-091-01'],
    [92, ['500 old yuan · 1950–51 PRC issue', '$1–$12 each', 'low'], 'china-092-01'],
    [92, ['5,000 old yuan · 1950–51 PRC issue', '$2–$35 each', 'low'], 'china-092-02'],
    [92, ['100 old yuan · 1950–51 PRC issue', '$1–$12 each', 'low'], 'china-092-03'],
    [92, ['150 old yuan · 1950–51 PRC issue', '$1–$12 each', 'low'], 'china-092-04'],
    [93, ['8,000 old yuan · 1951–53 PRC issue', '$1–$20 each', 'low'], 'china-093-01'],
    [94, ['25 fen · 1952–54 PRC issue', '$0.50–$15 each', 'low'], 'china-094-01'],
    [106, ['3,000 old yuan · air post', '$0.50–$10 each', 'low'], 'china-106-01'],
    [107, ['5,000 old yuan · 1st anniversary issue', '$2–$35 each', 'medium'], 'china-107-01'],
    [107, ['5,000 old yuan · 1st anniversary issue', '$2–$35 each', 'medium'], 'china-107-02'],
    [107, ['5,000 old yuan · 1st anniversary issue', '$2–$35 each', 'medium'], 'china-107-03'],
    [111, ['40 fen · 1958–63 PRC issue · used/overprinted', '$0.25–$8 each', 'low'], 'china-111-01'],
    [112, ['40 fen · 1964–70 PRC issue · used/overprinted', '$0.25–$8 each', 'low'], 'china-112-01'],
    [112, ['40 fen · 1964–70 PRC issue · used/overprinted', '$0.25–$8 each', 'low'], 'china-112-02'],
    [112, ['100 fen · 1964–70 PRC issue · used/overprinted', '$0.25–$8 each', 'low'], 'china-112-03'],
    [112, ['50 fen · 1964–70 PRC issue · used/overprinted', '$0.25–$8 each', 'low'], 'china-112-05']
  ].map(([pageSequence, [denomination, valuation, valueConfidence], imageName], index) => ({
    id: `china-${pageSequence}-${String(index + 1).padStart(2, '0')}`,
    pageSequence, country: 'China', denomination,
    heading: `China · page ${pageSequence} · stamp ${index + 1}`,
    image: `data/stamps/china/${imageName}.jpg?v=1`, status: 'visible',
    notes: 'Mounted stamp extracted from the photographed China section. Identification and value are provisional; confirm the exact issue, paper, perforation, watermark, overprint, cancellation type, and condition against a specialist catalogue before sale.',
    valuation, valueConfidence
  }))
];
