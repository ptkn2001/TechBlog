const newBlogEl = document.querySelector('#newblog_button');
const addCommentEl = document.querySelector('#add_a_new_comment');
const newCommentForm = document.querySelector('.new-comment-form');
const commentOKButton = document.querySelector('.add-comment');
const commentCancelButton = document.querySelector('.cancel-comment');
const newCommentInput = document.querySelector('#new_comment_input');

const submitBlogHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#newblog_title').value.trim();
    const blog_text = document.querySelector('#newblog_text').value.trim();

    if (title && blog_text) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, blog_text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};


const newCommentHandler = async(event) => {
    event.preventDefault();

    console.log("event clicked");
    newCommentForm.style.display = 'flex';

    commentOKButton.addEventListener('click', insertCommentHandler);

    commentCancelButton.addEventListener('click', () => {
        newCommentForm.style.display = 'none';
        newCommentInput.value = '';
    });
};

const insertCommentHandler = async(event) => {
    event.preventDefault();

    const blog_id = event.currentTarget.attributes['blogid'].value;
    const comment_text = newCommentInput.value;

    if (blog_id && comment_text) {

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ blog_id, comment_text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            if (response.status === 200) {
                document.location.replace(`/blog/${blog_id}`);
            }
        } else {
            alert(response.statusText);
        }
    }
};

if (addCommentEl) {
    addCommentEl.addEventListener('click', newCommentHandler);
}

if (newBlogEl) {
    newBlogEl.addEventListener('click', submitBlogHandler);
}