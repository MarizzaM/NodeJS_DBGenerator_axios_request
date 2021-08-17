const axios = require('axios');

const makeGetRequest = async () => {
  
  try {
    
    const response = await axios.get("https://randomuser.me/api");
    console.log(`\nName: ${response.data.results[0].name.first}`);
    console.log(`City: ${response.data.results[0].location.country}`);

  } catch (err) {

    console.log("received error: ", err.toJSON());
  }
};

var i = 0, howManyTimes = 10;

function f() {
  makeGetRequest();
  i++;
  if (i < howManyTimes) {
    setTimeout(f, 2000);
  }
}

f();
