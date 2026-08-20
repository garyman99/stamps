const fs = require('fs');
const vm = require('vm');
const context = { window: {} };
function run(file) { vm.runInNewContext(fs.readFileSync(file, 'utf8'), context); }
run('data/pages.js');
run('data/page-research.js');
run('data/stamp-auto.js');
const pages = context.window.STAMP_PAGES;
const records = context.window.STAMP_RECORDS_AUTO;
const chinaPages = new Set(pages.filter(p => p.sequence >= 91 && p.sequence <= 113).map(p => p.sequence));
const sources = [
  { title: 'StampWorld — China, Peoples Rep. catalogue', url: 'https://www.stampworld.com/en/stamps/China%2C-Peoples-Rep./Postage%20stamps/1949-2018', use: 'Issue identification and catalogue cross-check' },
  { title: 'Xabusiness — PRC stamp price list', url: 'https://www.xabusiness.com/china-stamp-catalogue.htm', use: 'Dealer asking-price comparison' },
  { title: 'Dorotheum — China stamp auction results', url: 'https://www.dorotheum.com/en/a/122927/', use: 'Realized-auction evidence for scarce Cultural Revolution material' },
  { title: 'Cherrystone — PRC auction results', url: 'https://www.cherrystoneauctions.com/_auction/results.asp?auction=200607&country=PEOPLE%27S+REPUBLIC+OF+CHINA', use: 'Specialist-auction context and realized prices' }
];
function estimate(page) {
  if (page <= 95) return '$1–$15';
  if (page <= 99) return '$1–$25';
  if (page <= 106) return '$2–$40';
  if (page <= 108) return '$5–$150';
  return '$1–$25';
}
const pricing = records.filter(r => chinaPages.has(r.pageSequence)).map(r => ({
  id: r.id, country: 'China', heading: 'China · People’s Republic and related listings · 1949–70',
  denomination: 'China stamp · issue identification pending', valuation: estimate(r.pageSequence), valueConfidence: 'low',
  valuationBasis: 'Screening estimate from PRC catalogue comparisons and market evidence; exact issue, perforation, watermark, gum, cancellation, and condition are not yet confirmed.',
  sources, pricingDate: '2026-08-20'
}));
fs.writeFileSync('data/stamp-pricing-china.js', `// China screening valuations; regenerate with scripts/build_china_pricing.js\nwindow.STAMP_PRICING_CHINA = ${JSON.stringify(pricing, null, 2)};\n`);
console.log(`Wrote ${pricing.length} China pricing records.`);
