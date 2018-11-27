import http from 'http';
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

  parseHTML(htmlString) {
    const dom = new JSDOM(htmlString);
    const listEntries = Array.from(dom.window.document.querySelectorAll(this.selector));

    return listEntries
      .map(entry => entry.textContent.replace(this.regex, ''))
      .filter(entry => entry !== '');
  }

  scrapeData() {
    return this.fetchHTML()
      .then(markupString => this.parseHTML(markupString))
      .catch(() => []);
  }
}
