const postDetail = document.getElementById("post-detail");

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderPost() {
  const postId = parseInt(getQueryParam("id"));
  const post = posts.find(p => p.id === postId);

  if (!post) {
    postDetail.innerHTML = `<p>Post not found 😢</p>`;
    return;
  }

  postDetail.innerHTML = `
    <img src="${post.img}" alt="${post.title}" class="post-img"/>
    <h1>${post.title}</h1>
    <p class="meta">By ${post.author} • ${post.date}</p>
    <p>${post.content}</p>
  `;
}

renderPost();
