import http from 'http';
// import https from 'https';
import { JSDOM } from 'jsdom';

export default class Scraper {
  constructor(url, selector, regex) {
    this.url = url;
    this.selector = selector;
    this.regex = regex;
  }

  fetchHTML() {
    return new Promise((resolve, reject) => {
      const markup = [];

      http.get(this.url, (response) => {
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
    const listEntries = Array.from(dom.window.document.querySelectorAll(this.selector));
    const extractedValues = listEntries
      .map(entry => entry.textContent.replace(this.regex, ''))
      .filter(entry => entry !== '');

    return extractedValues;
  }
}
