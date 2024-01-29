const WikipediaSearch = require('../wikipedia-search');
const assert = require('assert');

const run = async () => {
  const fakeAxios = {
    get() {
      return new Promise((resolve, reject) => {
        resolve({
          data: {
            query: {
              search: [{ title: 'Space' }, { title: 'Space Station' }],
            },
          },
        });
      });
    },
  };

  const wikiSearch = new WikipediaSearch(fakeAxios);

  const results = await wikiSearch.search('space');

  assert.strictEqual(
    results.length,
    10,
    'Failed to fetch the correct number of results'
  );
};

run();
