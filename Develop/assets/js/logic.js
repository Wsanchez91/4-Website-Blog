const container = document.querySelector(".container");
const themeSwitcher = document.querySelector("#theme-switcher");
const emoji = document.getElementById("emoji");

let mode = localStorage.getItem("mode") || "dark";


document.addEventListener("DOMContentLoaded", function () {
  if (mode === "light") {
    container.setAttribute("class", "light");
    emoji.textContent = "☀️"; 
    themeSwitcher.checked = true;
  } else {
    container.setAttribute("class", "dark");
    emoji.textContent = "🌙"; 
    themeSwitcher.checked = false;
  }
});

themeSwitcher.addEventListener("change", function () {
  if (themeSwitcher.checked) {
    mode = "light";
    container.setAttribute("class", "light");
    emoji.textContent = "☀️";
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
    emoji.textContent = "🌙";
  }

  localStorage.setItem("mode", mode);
});


const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const errorMessage = document.querySelector("#error");


form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  
  if (!username || !title || !content) {
    errorMessage.textContent = "All fields are required!";
    errorMessage.classList.add("text-danger");
    return;
  }

  const blogPost = {
    username: username,
    title: title,
    content: content,
    date: new Date().toLocaleString(), 
  };

 
  storeLocalStorage("blogPosts", blogPost);

  
  redirectPage("./blog.html");
});


function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function storeLocalStorage(key, newData) {
  const existingData = readLocalStorage(key);
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData)); 
}

const redirectPage = function (url) {
  location.assign(url);
};