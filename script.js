console.log("Portfolio Loaded");

// Smooth scroll to projects section when View Projects button is clicked
document.getElementById('view-projects-btn').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});