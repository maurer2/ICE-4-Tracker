import fs from 'fs-extra';

import Scraper from './src/Scraper/scraper';
import config from './src/Scraper/scraper.conf';

const scraperFernbahn = new Scraper(config);

const saveMockData = content => new Promise((resolve, reject) => {
  const newFile = fs.createWriteStream(`${__dirname}/mockData/trains.json`);

  newFile.on('error', () => {
    reject();
  });

  newFile.on('finish', () => {
    resolve('done');
  });

  newFile.write(content, 'utf8');
  newFile.end();
});

scraperFernbahn.scrapeData()
  .then((entries) => {
    const jsonEncoded = JSON.stringify(entries, null, 2);

    console.log(jsonEncoded);

    saveMockData(jsonEncoded)
      .then(() => {
        process.exit(0);
      })
      .catch(() => {
        process.exit(1);
      });
  });
