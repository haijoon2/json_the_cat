const request = require('request');
const arg = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  if (response.statusCode === 404) {
    console.log(response.statusCode);
    console.log('Page not found');
    process.exit(1);
  }

  if (body.length > 2) {
    printResult(body);
  } else {
    console.log(`No matching result for ${arg}`);
    process.exit(1);
  }
});

const printResult = (body) => {
  const fetchedData = JSON.parse(body);
  console.log(typeof fetchedData);
  console.log(fetchedData[0].description);
};