const commentFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment-body').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ text, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to add comment.');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
