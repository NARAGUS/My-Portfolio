




document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    
    });
  });


  let prevScrollPos = window.scrollY;
  const navbar = document.getElementById("nav");
  
  window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-50px"; // Adjust this value as needed
    }
    prevScrollPos = currentScrollPos;
  }
  
  function scrollToSection() {
    // Get the scrollable section element
    var scrollableSection = document.getElementById('btn');

    // Scroll to the top position of the scrollable section
    scrollableSection.scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to the scroll button
document.getElementById('btn').addEventListener('click', scrollToSection);



// script.js
document.getElementById('container-about').addEventListener('click', function() {
  // Scroll to the scrollable section
  document.getElementById('container-about').scrollIntoView({ behavior: 'smooth' });

  // Slide the background from left after 1 second delay
  setTimeout(function() {
      document.body.style.backgroundPosition = 'right'; // Change background position
  }, 1000); // Delay in milliseconds
});
