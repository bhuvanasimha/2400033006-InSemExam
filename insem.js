// Function to toggle between light and dark themes
const themeToggleBtn = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

// Check and apply stored theme preference
function checkAndApplyTheme() {
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme === 'dark') {
    document.body.classList.add('dark');
    themeStylesheet.href = 'dark-theme.css'; // Link to dark theme CSS
  } else {
    document.body.classList.remove('dark');
    themeStylesheet.href = 'light-theme.css'; // Link to light theme CSS
  }
}

// Toggle the theme and save preference in localStorage
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  
  // Toggle between light and dark theme
  if (currentTheme === 'light') {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeStylesheet.href = 'dark-theme.css';
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeStylesheet.href = 'light-theme.css';
  }
});

// Apply theme when the page loads
checkAndApplyTheme();