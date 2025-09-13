// Get the theme toggle button and the body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Set the initial icon based on the current theme
function updateIcon() {
    if (body.classList.contains('dark-mode')) {
        themeToggle.querySelector('span').textContent = '☀️'; // Sun icon for dark mode
    } else {
        themeToggle.querySelector('span').textContent = '🌙'; // Moon icon for light mode
    }
}
updateIcon();

// Add a click event listener to the button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Save the current theme preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }

    // Update the icon
    updateIcon();
});
