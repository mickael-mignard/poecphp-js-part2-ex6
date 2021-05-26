let images = document.querySelectorAll('img');

/**
 * Change image when mouse enters 
 */
 images.forEach(elt => {
   elt.addEventListener('mouseover', function () {
     elt.src = 'images/' + elt.getAttribute('id')+'_2.jpg';
   });
 });

 /**
 * Change image when mouse leaves 
 */
  images.forEach(elt => {
    elt.addEventListener('mouseleave', function () {
      elt.src = 'images/' + elt.getAttribute('id') + '.jpg';
    });
  });

