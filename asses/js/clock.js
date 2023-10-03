document.addEventListener("DOMContentLoaded", function() {
    const postContent = document.getElementById("post-content");
    const postButton = document.getElementById("post-button");
    const postsContainer = document.getElementById("posts");

    postButton.addEventListener("click", function() {
        const content = postContent.value;
        if (content) {
            const post = document.createElement("div");
            post.className = "post";
            post.textContent = content;
            postsContainer.appendChild(post);
            postContent.value = "";
        }
    });
});
