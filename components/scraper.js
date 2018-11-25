import https from 'https';

export default class Scraper {
  constructor(url) {
    this.url = url;
  }

  fetchHTML() {
    return new Promise((resolve, reject) => {
      https.get(this.url, (response) => {
        response.on('data', (body) => {
          resolve(body.toString());
        });
      }).on('error', (error) => {
        reject(error);
      });
    });
  }
}
