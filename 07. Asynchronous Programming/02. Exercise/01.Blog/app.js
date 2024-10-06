function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    const loadPostsButton = document.getElementById('btnLoadPosts');
    const postsSelect = document.getElementById('posts');
    const viewPostButton = document.getElementById('btnViewPost');

    let allPosts = {};

    loadPostsButton.addEventListener('click', loadPostsEvent);
    viewPostButton.addEventListener('click', viewPostEvent);

    async function loadPostsEvent() {
        postsSelect.innerHTML = '';

        try {
            const response = await fetch(postsURL);
            const data = await response.json();
            allPosts = data;

            for (const postId in allPosts) {
                const post = allPosts[postId];
                const option = document.createElement('option');
                option.value = postId;
                option.textContent = post.title;
                postsSelect.appendChild(option);
            }
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }

    async function viewPostEvent() {
        const postId = postsSelect.value;
        if (!postId) return;

        try {
            const response = await fetch(commentsURL);
            const data = await response.json();
            const comments = Object.values(data).filter(comment => comment.postId === postId);

            const chosenPost = allPosts[postId];

            const titleElement = document.getElementById('post-title');
            titleElement.textContent = chosenPost.title;

            const postContentElement = document.getElementById('post-body');
            postContentElement.textContent = chosenPost.body;

            const ul = document.getElementById('post-comments');
            ul.innerHTML = '';
            comments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment.text;
                ul.appendChild(li);
            });

        } catch (error) {
            console.error('Error loading comments:', error);
        }
    }
}

attachEvents();
