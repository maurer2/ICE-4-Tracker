import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

export default class Scraper {
  constructor({ url, selectors } = {}) {
    this.url = url;
    this.selectors = selectors;
  }

  fetchHTML() {
    return fetch(this.url, {
      method: 'GET',
      headers: {
        'X-Requested-With': '',
      },
      mode: 'cors',
      cache: 'default',
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.text())
      .catch((error) => {
        throw Error(error);
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
    const htmlData = this.fetchHTML()
      .then(markupString => markupString)
      .catch((error) => {
        throw Error(error);
      });

    const htmlEntries = htmlData.then(markupString => this.findEntries(markupString));

    const extractedEntries = htmlEntries.then(entries => this.extractEntries(entries));

    const parsedEntries = extractedEntries.then(entries => this.parseEntries(entries));

    return parsedEntries;
  }
}
