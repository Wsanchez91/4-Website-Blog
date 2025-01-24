

const formElement = document.querySelector("form");

function handleFormSubmission(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (!username || !title || !content) {
    alert("Please fill out all required fields!");
    return;
  }
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  blogPosts.push({ username, title, content });
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

  redirectPage("/Develop/blog.html");
}

function displayError(message) {
  const errorElement = document.querySelector("#error"); // 
  errorElement.textContent = message; 
  errorElement.style.color = "red";message (optional)
}

formElement.addEventListener("submit", handleFormSubmission);

function redirectPage(url) {
  window.location.href = url;
}
