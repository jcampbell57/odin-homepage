document.addEventListener('DOMContentLoaded', function () {
  const skillIcons = document.querySelectorAll('.skillIcon');

  // Add event listeners to each skill icon
  skillIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function () {
      // Toggle the 'colored' class on mouse enter
      icon.classList.toggle('colored');
    });

    icon.addEventListener('mouseleave', function () {
      // Toggle the 'colored' class on mouse leave
      icon.classList.toggle('colored');
    });
  });

  // Dark mode toggler
  const body = document.querySelector('body');
  const name = document.querySelector('.name');
  const projectsHeader = document.querySelector('.projectsHeader');
  const themeToggleIcon = document.querySelector('.themeToggleIcon');
  const themeToggler = document.querySelector('.themeToggle');

  function toggleDarkMode() {
    body.classList.toggle('darkMode');
    name.classList.toggle('darkMode');
    projectsHeader.classList.toggle('darkMode');
    themeToggleIcon.classList.toggle('darkMode');
  }

  themeToggler.addEventListener('mousedown', function () {
    toggleDarkMode();
  });

  themeToggler.addEventListener('keydown', function (event) {
    // Check if the key pressed is 'Enter' (key code 13) or 'Space' (key code 32)
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDarkMode();
    }
  });
});
