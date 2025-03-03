const cloudinary = require("./cloudinaryConfig");
const path = require("path");
const fs = require("fs");

// Function to upload an image to Cloudinary
const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "react-email-images", // Optional: Specify a folder in Cloudinary
    });
    console.log("Uploaded Image URL:", result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

// To run the code use command: node uploadimages.js
// Resolve the file path dynamically
const filePath = path.join(__dirname, "src", "img", "SKATE3.png");

// Debugging code: Check the resolved file path
console.log("Resolved file path:", filePath);

// Debugging code: Check if the file exists
if (fs.existsSync(filePath)) {
  console.log("File exists, proceeding to upload...");
  uploadImage(filePath); // Call the upload function if the file exists
} else {
  console.error("File does not exist:", filePath);
}
