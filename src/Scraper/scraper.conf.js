export default {
  url: 'https://cors-anywhere.herokuapp.com/http://www.grahnert.de/fernbahn/ice4.html',
  selectors: {
    entry: {
      selectorString: 'table tr:not(:first-child)',
      regex: /^\d/,
    },
    trainNumber: {
      selectorString: 'td:first-child',
      regex: /\n/g,
    },
    origin: {
      selectorString: 'td:nth-of-type(2)',
      regex: /\s\s+/g,
    },
    destination: {
      selectorString: 'td:nth-of-type(4)',
      regex: /\s\s+/g,
    },
  },
};
