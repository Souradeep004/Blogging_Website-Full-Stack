// Main JavaScript for Blog

let currentCategory = 'all';

// Load posts on page load
async function loadPosts(category = 'all') {
    const loading = document.getElementById('loading');
    const postsGrid = document.getElementById('postsGrid');

    if (loading) loading.style.display = 'block';
    if (postsGrid) postsGrid.innerHTML = '';

    try {
        const data = await api.getPosts(category);

        if (loading) loading.style.display = 'none';

        if (data.success && data.data.length > 0) {
            renderPosts(data.data);
        } else {
            if (postsGrid) {
                postsGrid.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">No posts found.</p>';
            }
        }
    } catch (error) {
        console.error('Error loading posts:', error);
        if (loading) loading.style.display = 'none';
        if (postsGrid) {
            postsGrid.innerHTML = '<p style="text-align: center; padding: 2rem; color: #c62828;">Failed to load posts. Please make sure the backend server is running.</p>';
        }
    }
}

// Render posts to grid
function renderPosts(posts) {
    const postsGrid = document.getElementById('postsGrid');
    if (!postsGrid) return;

    postsGrid.innerHTML = '';

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.onclick = () => viewPost(post._id);

        const categoryIcons = {
            'Technology': '💻',
            'Lifestyle': '🏃',
            'Travel': '✈️',
            'Food': '🍝',
            'Business': '💼',
            'Other': '📝'
        };

        const icon = categoryIcons[post.category] || '📝';

        card.innerHTML = `
            <div class="post-image">${icon}</div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-category">${post.category}</span>
                    <span>${post.readTime}</span>
                    <span>${new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <a href="#" class="read-more">Read More →</a>
                    <small style="color: #999;">👁️ ${post.views || 0}</small>
                </div>
            </div>
        `;

        postsGrid.appendChild(card);
    });
}

// Filter by category
function filterCategory(category) {
    currentCategory = category;

    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    loadPosts(category);
}

// Search posts
async function searchPosts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (!query) {
        loadPosts(currentCategory);
        return;
    }

    const loading = document.getElementById('loading');
    const postsGrid = document.getElementById('postsGrid');

    if (loading) loading.style.display = 'block';
    if (postsGrid) postsGrid.innerHTML = '';

    try {
        const data = await api.searchPosts(query);

        if (loading) loading.style.display = 'none';

        if (data.success && data.data.length > 0) {
            renderPosts(data.data);
        } else {
            if (postsGrid) {
                postsGrid.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">No posts found matching your search.</p>';
            }
        }
    } catch (error) {
        console.error('Error searching posts:', error);
        if (loading) loading.style.display = 'none';
    }
}

// View single post (redirect to post page with ID)
function viewPost(id) {
    window.location.href = `post.html?id=${id}`;
}

// Initialize on page load
if (document.getElementById('postsGrid')) {
    loadPosts();
}

// Add enter key support for search
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchPosts();
        }
    });
}