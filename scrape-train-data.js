import Scraper from './components/scraper';
import config from './components/scraper.conf';

const scraperFernbahn = new Scraper(config);

scraperFernbahn.scrapeData()
  .then((entries) => {
    console.log(entries);

    return entries;
  });
