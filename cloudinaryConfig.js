const cloudinary = require("cloudinary").v2;

// Configure your Cloudinary account
cloudinary.config({
  cloud_name: "ds8slufsu", // Replace with your Cloud Name from the Cloudinary Dashboard
  api_key: "938318688526815", // Replace with your API Key
  api_secret: "Qxyup0d0eFZaxzfT01P70uYkiKs", // Replace with your API Secret
});

module.exports = cloudinary;
