```javascript
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getComments') {
        chrome.storage.sync.get([window.location.href], function(result) {
            sendResponse({comments: result[window.location.href]});
        });
        return true;
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'saveComment') {
        let comment = request.comment;
        chrome.storage.sync.get([window.location.href], function(result) {
            let comments = result[window.location.href] || [];
            comments.push(comment);
            let saveObj = {};
            saveObj[window.location.href] = comments;
            chrome.storage.sync.set(saveObj, function() {
                sendResponse({status: 'Comment saved'});
            });
        });
        return true;
    }
});
```