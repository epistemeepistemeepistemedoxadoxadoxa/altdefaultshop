    // Function to handle image switching
    function setupImageSwitcher(sectionId, imageId) {
      // Select the section's number elements
      const numbers = document.querySelectorAll(`#${sectionId} .number`);
      
      // Add click event listeners to all the number elements
      numbers.forEach(number => {
          number.addEventListener('click', function() {
              // Get the image file from the data attribute
              const imageFile = this.getAttribute('data-image');
              
              // Update the src of the image element in the corresponding section
              document.getElementById(imageId).src = `Concrete/${imageFile}`;
          });
      });
  }

  // Setup image switching for crete1 section
  setupImageSwitcher('crete1', 'concrete-img');

  // Setup image switching for crete2 section
  setupImageSwitcher('crete2', 'crete2-img');

    // Setup image switching for crete2 section
    setupImageSwitcher('crete3', 'crete3-img');
