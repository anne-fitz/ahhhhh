
    $(document).ready(function() {
      // Toggle custom cursor style when the button is clicked
      $('#starland').on('click', function() {
        $('body').toggleClass('star-cursor'); // Toggle the 'custom-cursor' class on the body
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const marqueeContent = document.querySelector(".marquee-content");
      
        // Clone the marquee content for seamless looping
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.parentNode.appendChild(clone);
      
        // Calculate the total width of the marquee content
        const totalWidth = marqueeContent.scrollWidth;
        const speed = 50; // Pixels per second
        const duration = totalWidth / speed;
      
        // Set the animation duration dynamically
        marqueeContent.style.animationDuration = `${duration}s`;
        clone.style.animationDuration = `${duration}s`;
      });

      

      
      