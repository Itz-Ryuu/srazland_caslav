// Toggle open/close for posts
document.querySelectorAll(".post-header").forEach(header => {
  header.addEventListener("click", () => {
    const post = header.parentElement;
    post.classList.toggle("active");
  });
});