import Scraper from './src/Scraper/scraper';
import config from './src/Scraper/scraper.conf';

const scraperFernbahn = new Scraper(config);

scraperFernbahn.scrapeData()
  .then((entries) => {
    console.log(entries);

    return entries;
  });
