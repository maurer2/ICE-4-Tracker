import Scraper from './components/scraper';

console.log('choo choo');

const scraper = new Scraper('https://inside.bahn.de/ice-4/');

const htmlFull = scraper.fetchHTML();

htmlFull
  .then((htmlString) => {
    const trainNumbers = scraper.getParsedValues(htmlString);

    console.log(trainNumbers);
  })
  .catch((error) => {
    console.log(error);
  });
