```javascript
let comments = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('saveButton').addEventListener('click', saveComment);
    chrome.runtime.sendMessage({type: 'getComments', url: window.location.href}, function(response) {
        comments = response.comments;
        renderComments();
    });
});

function saveComment() {
    const commentInput = document.getElementById('commentInput');
    const comment = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        text: commentInput.value
    };
    chrome.runtime.sendMessage({type: 'saveComment', comment: comment}, function(response) {
        comments = response.comments;
        renderComments();
    });
    commentInput.value = '';
}

function renderComments() {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';
    comments.forEach(function(comment) {
        const li = document.createElement('li');
        li.textContent = `${comment.timestamp}: ${comment.text}`;
        commentList.appendChild(li);
    });
}
```