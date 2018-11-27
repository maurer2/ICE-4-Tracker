import Scraper from './components/scraper';

const scrapeFernBahn = new Scraper('http://www.grahnert.de/fernbahn/ice4.html', 'table tr:not(:first-child) td:first-child', /\D/g);
const htmlFernbahn = scrapeFernBahn.scrapeData();

htmlFernbahn
  .then((trainNumbers) => {
    console.log(trainNumbers);
  });
