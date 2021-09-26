const breedName = process.argv.slice(2)
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Breed not found")
  }
  else {
    console.log(data);
  }


});


