const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function uploadFile(filePath, uploadUrl) {
  try {
    // Read the file as a stream
    const fileStream = fs.createReadStream(filePath);

    // Prepare form data (if the API expects it)
    const FormData = require('form-data');
    const formData = new FormData();
    formData.append('upload', fileStream, path.basename(filePath));

    // Send the request using Axios
    const response = await axios.post(uploadUrl, formData, {
      headers: {
        ...formData.getHeaders(), // Include form-data headers
      },
    });

    console.log('File uploaded successfully:', response.data);
  } catch (error) {
    console.error('Error uploading file:', error.response?.data || error.message);
  }
}

// Usage example
const filePath = './Screenshot_211212.png'; // Path to the file
const uploadUrl = 'https://printblur.com/printerval-central/upload'; // Rep

uploadFile(filePath, uploadUrl);
