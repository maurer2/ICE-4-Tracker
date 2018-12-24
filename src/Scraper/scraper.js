import http from 'http';
import { JSDOM } from 'jsdom';

export default class Scraper {
  constructor({ url, selectors } = {}) {
    this.url = url;
    this.selectors = selectors;
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

  findEntries(htmlString) {
    const dom = new JSDOM(htmlString);
    const entries = [...dom.window.document.querySelectorAll(this.selectors.entry.selectorString)];

    return entries;
  }

  extractEntries(entries) {
    return entries
      .filter((entry) => {
        const innerText = entry.textContent.trim();

        return innerText !== '' && innerText.match(this.selectors.entry.regex);
      })
      .map(entry => ({
        trainNumber: entry.querySelector(this.selectors.trainNumber.selectorString),
        origin: entry.querySelector(this.selectors.origin.selectorString),
        destination: entry.querySelector(this.selectors.destination.selectorString),
      }));
  }

  parseEntries(entries) {
    return entries
      .map(entry => ({
        trainNumber: entry.trainNumber.textContent.replace(this.selectors.trainNumber.regex, ''),
        origin: entry.origin.textContent.replace(this.selectors.origin.regex, ''),
        destination: entry.destination.textContent.replace(this.selectors.destination.regex, ''),
      }));
  }

  scrapeData() {
    return this.fetchHTML()
      .then(markupString => this.findEntries(markupString))
      .catch(() => [])
      .then(entries => this.extractEntries(entries))
      .then(entries => this.parseEntries(entries));
  }
}
