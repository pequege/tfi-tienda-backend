const axios = require('axios');
const URL_API_DECIDIR = 'https://developers.decidir.com/api/v2/tokens';

const config = {
  headers: {
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
    "apikey": "b192e4cb99564b84bf5db5550112adea",
  },
};
const requestData = {
  body: JSON.stringify({
    "card_number": "4507990000004905",
    "card_expiration_month": "08",
    "card_expiration_year": "24",
    "security_code": "123",
    "card_holder_name": "John Doe",
    "card_holder_identification": {
      "type": "dni",
      "number": "25123456"
    }
  })
};

axios.post(URL_API_DECIDIR, requestData, config)
  .then(response => {
    // Manejar la respuesta
    console.log(response.data);
  })
  .catch(error => {
    // Manejar el error
    console.error('Error:', error);
  });