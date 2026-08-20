// Page-level research transcribed from the album's printed section headers.
// This intentionally stops at country/section assignment; individual stamp
// identification, condition, and market evidence are the next research layer.
(function () {
  window.STAMP_RESEARCH_VERSION = 2;
  const ranges = [
    [1, 1, 'Album cover', 'Senior Statesman World Stamp Album · 1971'],
    [2, 2, 'United States', 'Insured U.S. Mail'],
    [3, 3, 'Abu Dhabi', 'Abu Dhabi'], [4, 5, 'Afghanistan', 'Afghanistan'],
    [6, 7, 'Ajman', 'Ajman'], [8, 9, 'Albania', 'Albania'], [10, 10, 'Algeria', 'Algeria'],
    [11, 12, 'Andorra', 'Andorra'], [13, 16, 'Argentina', 'Argentina'],
    [17, 21, 'Australia', 'Australia'], [22, 32, 'Austria', 'Austria'],
    [33, 33, 'Bahrain', 'Bahrain'],
    [34, 34, 'Barbados · Barbuda · Batum', 'Barbados · Barbuda · Batum'],
    [35, 37, 'Belgium', 'Belgium'], [38, 38, 'Bhutan', 'Bhutan'],
    [39, 39, 'Bolivia', 'Bolivia'], [40, 42, 'Brazil', 'Brazil'],
    [43, 43, 'British Guiana', 'British Guiana'], [44, 47, 'British Honduras · British Indian Ocean Territory', 'British Honduras · British Indian Ocean Territory'],
    [48, 59, 'Bulgaria', 'Bulgaria'], [60, 61, 'Burma', 'Burma'], [62, 65, 'Burundi', 'Burundi'],
    [66, 66, 'Cambodia', 'Cambodia'], [67, 69, 'Cameroun', 'Cameroun'],
    [70, 81, 'Canada', 'Canada'], [82, 82, 'Cayman Islands', 'Cayman Islands'],
    [83, 84, 'Central African Republic', 'Central African Republic'],
    [85, 86, 'Ceylon', 'Ceylon'], [87, 88, 'Chad', 'Chad'],
    [89, 90, 'Chile', 'Chile'], [91, 112, 'China', 'China · People’s Republic and related listings'],
    [113, 113, 'China · Christmas Island · Cocos Islands', 'China · Christmas Island · Cocos Islands'],
    [114, 114, 'Colombia', 'Colombia'], [115, 117, 'Congo Republic', 'Congo Republic'],
    [118, 119, 'Congo Democratic Republic', 'Congo Democratic Republic'],
    [120, 120, 'Congo People’s Republic', 'Congo People’s Republic'],
    [121, 121, 'Costa Rica', 'Costa Rica'], [122, 122, 'Cuba', 'Cuba'],
    [123, 124, 'Cyprus', 'Cyprus'], [125, 136, 'Czechoslovakia', 'Czechoslovakia'],
    [137, 138, 'Dahomey', 'Dahomey'], [139, 139, 'Danzig', 'Danzig'],
    [140, 143, 'Denmark', 'Denmark'], [144, 144, 'Dominican Republic', 'Dominican Republic'],
    [145, 148, 'Dubai', 'Dubai'], [149, 149, 'Ecuador', 'Ecuador'],
    [150, 151, 'Egypt', 'Egypt'], [152, 152, 'Estonia', 'Estonia'],
    [153, 153, 'Ethiopia', 'Ethiopia'], [154, 154, 'Finland', 'Finland'],
    [155, 162, 'France', 'France'], [163, 163, 'French Polynesia', 'French Polynesia'],
    [164, 164, 'French Southern and Antarctic Territories · Sudan · West Africa · Rwanda', 'French Southern and Antarctic Territories · Sudan · West Africa · Rwanda'],
    [165, 166, 'Fujeira', 'Fujeira'], [167, 167, 'Gabon', 'Gabon'],
    [168, 168, 'Gambia', 'Gambia'], [169, 179, 'Germany', 'Germany'],
    [180, 201, 'German Democratic Republic', 'Germany · German Democratic Republic'],
    [202, 202, 'Ghana', 'Ghana'], [203, 203, 'Gilbert & Ellice Islands', 'Gilbert & Ellice Islands'],
    [204, 209, 'Great Britain', 'Great Britain'], [210, 210, 'Greece', 'Greece'],
    [211, 215, 'Grenada', 'Grenada'], [216, 216, 'Guatemala', 'Guatemala'],
    [217, 217, 'Guinea', 'Guinea'], [218, 218, 'Haiti', 'Haiti'],
    [219, 219, 'Honduras', 'Honduras'], [220, 248, 'Hungary', 'Hungary']
  ];
  const yearRanges = {
    'Abu Dhabi': '1964–71', Afghanistan: '1871–60', Ajman: '1964–69', Albania: '1913–66', Algeria: '1924–45',
    Andorra: '1928–65', Argentina: '1858–70', Australia: '1850–69', Austria: '1850–69', Bahrain: '1933–70',
    Belgium: '1849–68', Bhutan: '1962–70', Bolivia: '1867–37', Brazil: '1843–68', 'British Guiana': '1860–66',
    Bulgaria: '1882–46', Burma: '1937–68', Burundi: '1962–70', Cambodia: '1951–71', Cameroun: '1916–60',
    Canada: '1851–70', 'Cayman Islands': '1900–70', 'Central African Republic': '1958–69', Ceylon: '1857–52', Chad: '1960–70',
    Chile: '1853–68', China: '1949–70', Colombia: '1850–64', 'Congo Democratic Republic': '1960–70',
    'Congo People’s Republic': '1970–72', 'Costa Rica': '1881–70', Cuba: '1855–70', Cyprus: '1882–65',
    Czechoslovakia: '1918–54', Dahomey: '1893–60', Danzig: '1920–39', Denmark: '1851–68',
    'Dominican Republic': '1862–67', Dubai: '1963–69', Ecuador: '1881–50', Egypt: '1879–66', Estonia: '1918–40',
    Ethiopia: '1894–72', Finland: '1856–50', France: '1849–69', 'French Polynesia': '1892–72', Fujeira: '1964–65',
    Gabon: '1886–65', Gambia: '1869–64', Germany: '1850–23', 'German Democratic Republic': '1949–70', Ghana: '1957–70',
    'Gilbert & Ellice Islands': '1912–66', 'Great Britain': '1840–69', Greece: '1861–67', Grenada: '1861–69',
    Guatemala: '1871–70', Guinea: '1900–63', Haiti: '1881–60', Honduras: '1866–65', Hungary: '1871–70'
  };
  const note = 'Page-level research recorded from the album’s printed heading or section continuity. Date ranges are the album’s printed coverage ranges; shortened two-digit end years are preserved as shown. Stamp-level identification, condition, and value research is still pending.';
  ranges.forEach(([start, end, country, heading]) => {
    window.STAMP_PAGES.filter(p => p.sequence >= start && p.sequence <= end).forEach(p => {
      p.country = country; p.heading = heading; p.status = 'reviewed'; p.description = note;
    });
  });
  window.STAMP_PAGES.forEach(p => {
    const years = yearRanges[p.country];
    if (years && !p.heading.includes('· 19')) p.heading = `${p.heading} · ${years}`;
  });
  const cover = window.STAMP_PAGES.find(p => p.sequence === 1);
  if (cover) cover.description = 'Album cover photographed from the inherited Senior Statesman World Stamp Album. The page inventory begins with the following interior page.';
  const mixed = new Set([34, 113, 164]);
  mixed.forEach(sequence => {
    const page = window.STAMP_PAGES.find(p => p.sequence === sequence);
    if (page) page.description += ' This page contains a multi-territory album section and should be split further during stamp-level cataloging.';
  });
}());
