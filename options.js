```javascript
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clearButton').addEventListener('click', clearComments);
    getComments();
});

function getComments() {
    chrome.runtime.sendMessage({type: 'getComments'}, function(response) {
        renderComments(response.comments);
    });
}

function clearComments() {
    chrome.runtime.sendMessage({type: 'clearComments'}, function(response) {
        document.getElementById('commentList').innerHTML = '';
    });
}

function renderComments(comments) {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';
    comments.forEach(function(comment) {
        const li = document.createElement('li');
        li.textContent = `${comment.text} (on ${comment.url} at ${new Date(comment.timestamp).toLocaleString()})`;
        commentList.appendChild(li);
    });
}
```