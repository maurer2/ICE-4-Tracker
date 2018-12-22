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

  extractElementsFromHTML(htmlString) {
    const dom = new JSDOM(htmlString);
    const entries = [...dom.window.document.querySelectorAll(this.selectors.entry.selectorString)];

    return entries;
  }

  extractDataFromElements(entries) {
    return entries
      .filter(entry => entry.textContent.trim() !== '')
      .map((entry) => {
        const trainNumber = entry.querySelector(this.selectors.trainNumber.selectorString);
        const origin = entry.querySelector(this.selectors.origin.selectorString);
        const destination = entry.querySelector(this.selectors.destination.selectorString);

        return {
          trainNumber: trainNumber.textContent.replace(this.selectors.trainNumber.regex, ''),
          origin: origin.textContent.replace(this.selectors.origin.regex, ''),
          destination: destination.textContent.replace(this.selectors.destination.regex, ''),
        };
      });
  }

  scrapeData() {
    return this.fetchHTML()
      .then(markupString => this.extractElementsFromHTML(markupString))
      .catch(() => [])
      .then(entries => this.extractDataFromElements(entries));
  }
}
