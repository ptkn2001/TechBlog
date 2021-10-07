const getBlogDetailsHandler = async(event) => {
    event.preventDefault();

    const blogId = event.currentTarget.attributes['blogid'].value;

    document.location.replace(`/blog/${blogId}`);
}

const elements = document.querySelectorAll('#blog_details_link');

Array.from(elements).forEach((element) => {
    element.addEventListener('click', getBlogDetailsHandler);
});