const axios = require("axios");


//  const checkPostalCodeService = async (orgPincode, desPincode) =>  {
//   const url = "http://smarttrack.ctbsplus.dtdc.com/ratecalapi/PincodeApiCall";
//   const headers = {
//     "Content-Type": "application/json",
//     Cookie: 'GCLB="ce916d3ca633f33a"', // Replace with valid cookie if required
//   };

//   const data = {
//     orgPincode,
//     desPincode,
//   };

//   try {
//     const response = await axios.post(url, data);
//     console.log("Response data:", response.data);
//   } catch (error) {
//     if (error.response) {
//       console.error("API Error:", error.response.status, error.response.data);
//     } else {
//       console.error("Network Error:", error.message);
//     }
//   }


// };

// module.exports = { checkPostalCodeService };

 const checkPostalCodeService = async (orgPincode, desPincode) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/delivery/verify-pincode`; // URL to your backend API

  const data = {
    orgPincode,
    desPincode,
  };

  try {
    const response = await axios.post(url, data);
    return response.data; // Return the response data to the caller
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || "Error verifying pincode");
    }
    throw new Error("Network error");
  }
};


const bookShipment = async (data) => {
  const url = 'http://your-backend-api-url/consignment'; // Your backend URL

 

  const headers = {
    'api-key': 'b01ed3562b088ab9c52822e3c18f9e',
    'Content-Type': 'application/json',
  };

  try {
    // Send request to the backend API
    const response = await axios.post(url, data, { headers });

    // Handle success response
    console.log('Response from backend:', response.data);

    // Handle the response on the frontend (e.g., update state or show message)
  } catch (error) {
    console.error('Error sending consignment data:', error.message);
  }
};

module.exports = { checkPostalCodeService, bookShipment };

// checkPostalCodeService("110025","110013")


