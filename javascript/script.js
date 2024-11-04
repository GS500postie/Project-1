// Dark Mode Toggle
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode')
}

// Example usage
document
  .getElementById('darkModeButton')
  .addEventListener('click', toggleDarkMode)
