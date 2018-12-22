import Scraper from './components/scraper';

const scrapeFernBahn = new Scraper({
  url: 'http://www.grahnert.de/fernbahn/ice4.html',
  selectors: {
    entry: {
      selectorString: 'table tr:not(:first-child)',
      regex: '',
    },
    trainNumber: {
      selectorString: 'table tr:not(:first-child) td:first-child',
      regex: /\D/g,
    },
  },
});
const htmlFernbahn = scrapeFernBahn.scrapeData();

htmlFernbahn
  .then((entries) => {
    console.log(entries);
  });
