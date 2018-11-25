import https from 'https';
import { JSDOM } from 'jsdom';

export default class Scraper {
  constructor(url) {
    this.url = url;
  }

  fetchHTML() {
    return new Promise((resolve, reject) => {
      const markup = [];

      https.get(this.url, (response) => {
        response
          .on('data', (body) => {
            markup.push(body.toString());
          })
          .on('end', () => {
            resolve(markup.join(''));
          });
      }).on('error', (error) => {
        reject(error);
      });
    });
  }

  getParsedValues(htmlString) {
    const dom = new JSDOM(htmlString);
    const listEntries = Array.from(dom.window.document.querySelectorAll('.entry-content h2 + p + ul > li'));

    const extractedValues = listEntries.map((entry) => {
      return entry.textContent.replace(/\D/g, '');
    });

    return extractedValues;
  }
}
