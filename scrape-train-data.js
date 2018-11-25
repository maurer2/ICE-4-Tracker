import Scraper from './components/scraper';

console.log('choo choo');

//const scraperDB = new Scraper('https://inside.bahn.de/ice-4/', '.entry-content h2 + p + ul > li', /\D/g);
const scrapeFernBahn = new Scraper('http://www.grahnert.de/fernbahn/ice4.html', 'table tr:not(:first-child) td:first-child', /\D/g);

// const htmlDB = scraperDB.fetchHTML();
const htmlFernbahn = scrapeFernBahn.fetchHTML();

const trainNumbers = htmlFernbahn
  .then((htmlString) => {
    const parsedNumbers = scrapeFernBahn.getParsedValues(htmlString);

    console.log(parsedNumbers);
  })
  .catch((error) => {
    console.log(error);
  });
