const Jimp = require('jimp');

async function negativeimage(inputPath, outputPath) {
  try {
    // Load the input image
    const image = await Jimp.read(inputPath);

    // Convert the image to grayscale
    image.grayscale();

    // Apply a Gaussian blur to the image
    image.gaussian(3);

    // Invert the image colors
    image.invert();

    // Save the processed image
    await image.writeAsync(outputPath);

    console.log('negative/black&white image created successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

module.exports = negativeimage;
