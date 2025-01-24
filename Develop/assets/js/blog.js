// Select the main element and the back button
const mainArticle = document.querySelector("main"); // Main content area where blog posts are displayed
const backBtn = document.querySelector("#back"); // Back button

// Function to build and append elements to the DOM
function newElement(tag, content, parent) {
  const element = document.createElement(tag); // Create a new element
  element.textContent = content; // Set its text content
  parent.appendChild(element); // Append it to the parent
}

// Function to display a "no posts" message
function noPostDisplay() {
  mainArticle.innerHTML = ""; // Clear existing content
  const noPostsMessage = document.createElement("p");
  noPostsMessage.classList.add("text-center", "mt-4");
  noPostsMessage.textContent = "No blog posts to display.";
  mainArticle.appendChild(noPostsMessage); // Add a message to the main element
}

// Function to render the list of blog posts
function renderBlogList() {
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []; // Retrieve blog posts from local storage
  mainArticle.innerHTML = ""; // Clear the main element

  if (blogPosts.length > 0) {
    blogPosts.forEach((post) => {
      const article = document.createElement("article");
      article.classList.add("mb-4"); // Add spacing between articles

      const ul = document.createElement("ul");
      const li = document.createElement("li");

      // Add title
      newElement("h2", post.title, li);

      // Add content
      newElement("p", `By: ${post.username}`, li);
      newElement("blockquote", post.content, li);

      ul.appendChild(li);
      article.appendChild(ul);
      mainArticle.appendChild(article);
    });
  } else {
    noPostDisplay(); // Display "no posts" message if the list is empty
  }
}

// Call the renderBlogList function to display posts
renderBlogList();

// Redirect to the home page when the back button is clicked
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "./index.html"; // Redirect to the homepage
  });
}