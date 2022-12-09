const deleteFormHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (id) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Failed to delete post.');
        }
    }
};

document.querySelector('#delete-post').addEventListener('click', deleteFormHandler);