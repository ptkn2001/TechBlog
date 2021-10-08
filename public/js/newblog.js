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

document
    .querySelector('#newblog_button')
    .addEventListener('click', submitBlogHandler);