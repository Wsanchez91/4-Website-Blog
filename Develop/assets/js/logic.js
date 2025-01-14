// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const container = document.querySelector('.container');
const themeSwitcher = document.querySelector('#theme-switcher');
const emoji = document.getElementById('emoji');

let mode = localStorage.getItem("mode") || 'dark';
// let mode = "dark";

document.addEventListener('DOMContentLoaded', function() {
  if (mode === 'light') {
      container.setAttribute('class', 'light');
      emoji.textContent = "☀️"; // Sun emoji for light mode
      themeSwitcher.checked = true; // Check the checkbox if light mode is active
  } else {
      container.setAttribute('class', 'dark');
      emoji.textContent = "🌙"; // Moon emoji for dark mode
      themeSwitcher.checked = false; // Uncheck the checkbox if dark mode is active
  }
});

themeSwitcher.addEventListener('change', function() {
  if (themeSwitcher.checked) {
      mode = 'light';
      container.setAttribute('class', 'light');
      emoji.textContent = "☀️"; // Change emoji to sun
  } else {
      mode = 'dark';
      container.setAttribute('class', 'dark');
      emoji.textContent = "🌙"; // Change emoji to moon
  }

  localStorage.setItem('mode', mode); // Save the mode to local storage
});



// header.appendChild(toggle);



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

