// Get all the images
let images = document.querySelectorAll('img');

/**
 * Change each image by another one when mouse over 
 */
images.forEach(image => {
  image.addEventListener('mouseover', () => image.src = 'images/' + image.id + '_2.jpg');
});

/**
 * Change each image by another one when mouse out 
 */
 images.forEach(image => {
  image.addEventListener('mouseout', () => image.src = 'images/' + image.id + '.jpg');
});
