import Scraper from './components/scraper';

console.log('choo choo');

const scraper = new Scraper('https://inside.bahn.de/ice-4/');

scraper.fetchHTML()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
