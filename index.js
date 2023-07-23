const Jimp = require('jimp');

async function negativeimage(inputPath, outputPath, choice) {
  try {
    // Load the input image
    const image = await Jimp.read(inputPath);
    
    if(choice === 'p'){

      //apply posterize effect
      image.posterize(4)

      //apply brightness to the image
      image.brightness(0.2)

      //apply contrast to enhance image
      image.contrast(0.1)
      
    } else{
      // Convert the image to grayscale
      image.grayscale();
  
      // Apply a Gaussian blur to the image
      image.gaussian(3);
  
      // Invert the image colors
      image.invert();
    }

    // Save the processed image
    await image.writeAsync(outputPath);

    console.log('the desired image created successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

module.exports = negativeimage;
