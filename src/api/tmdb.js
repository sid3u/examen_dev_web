const API_KEY = 'bf5d318b95a6dc73acbf08d1eb24522c';

export async function getPersonne(searchTerm = '', offset = 1) {
    try {
      let response;
      switch (offset) {
        case 1:
          console.log('0');
          response = require('../helpers/PopularPeople_p1.json');
          break;
        case 2:
          console.log('20');
          response = require('../helpers/PopularPeople_p2.json');
          break;
      }
      return response;
    } catch (error) {
      console.log(`Error with function getRestaurants ${error.message}`);
      throw error;
    }
};


 