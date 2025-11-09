const container = document.getElementById("posts-container");

function renderPosts() {
  if (!container) return;
  container.innerHTML = posts.map(post => `
    <div class="post-card" onclick="openPost(${post.id})">
      <img src="${post.img}" alt="${post.title}" />
      <div class="post-content">
        <h2>${post.title}</h2>
        <p>${post.content.slice(0, 100)}...</p>
        <p class="meta">By ${post.author} • ${post.date}</p>
      </div>
    </div>
  `).join('');
}

function openPost(id) {
  window.location.href = `post.html?id=${id}`;
}

renderPosts();
