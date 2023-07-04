```javascript
let comments = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getComments') {
    chrome.storage.sync.get(['comments'], function(result) {
      comments = result.comments || [];
      sendResponse({comments: comments});
    });
  } else if (request.message === 'saveComment') {
    let comment = {
      url: request.url,
      timestamp: new Date().getTime(),
      text: request.text
    };
    comments.push(comment);
    chrome.storage.sync.set({comments: comments}, function() {
      sendResponse({status: 'Comment saved'});
    });
  } else if (request.message === 'clearComments') {
    comments = [];
    chrome.storage.sync.set({comments: comments}, function() {
      sendResponse({status: 'Comments cleared'});
    });
  }
  return true;
});
```