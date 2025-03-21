// Create the "Back to Top" button dynamically
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.textContent = 'Back to Top';

// Apply styling dynamically
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.backgroundColor = '#007bff';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '8px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.fontSize = '1rem';
backToTopButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
backToTopButton.style.transition = 'background-color 0.3s ease';

// Append the button to the body
document.body.appendChild(backToTopButton);

// Add scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show button after scrolling 200px down
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Add click event listener to scroll to the top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// Add hover effect dynamically
backToTopButton.addEventListener('mouseover', () => {
    backToTopButton.style.backgroundColor = '#0056b3';
});
backToTopButton.addEventListener('mouseout', () => {
    backToTopButton.style.backgroundColor = '#007bff';
});
