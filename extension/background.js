```javascript
import { activeloop } from './lib/activeloop.js';
import { supertokens } from './lib/supertokens.js';
import { modal } from './lib/modal.js';
import { captureSelection, captureMHTML } from './utils/selectionCapture.js';
import { saveToVector, searchVector } from './utils/vectorStore.js';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'save-selection',
    title: 'Save Selection',
    contexts: ['selection'],
  });

  chrome.contextMenus.create({
    id: 'save-website',
    title: 'Save Website',
    contexts: ['page'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'save-selection') {
    captureSelection(info.selectionText)
      .then(data => saveToVector(data))
      .catch(err => console.error(err));
  } else if (info.menuItemId === 'save-website') {
    captureMHTML(tab.id)
      .then(data => saveToVector(data))
      .catch(err => console.error(err));
  }
});

chrome.omnibox.onInputEntered.addListener((text) => {
  searchVector(text)
    .then(results => {
      chrome.tabs.create({
        url: `data:text/html,${encodeURIComponent(results)}`,
      });
    })
    .catch(err => console.error(err));
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'SAVE_TO_VECTOR') {
    saveToVector(request.data)
      .then(() => sendResponse({ success: true }))
      .catch(err => sendResponse({ success: false, error: err }));
  } else if (request.message === 'SEARCH_VECTOR') {
    searchVector(request.query)
      .then(results => sendResponse({ success: true, data: results }))
      .catch(err => sendResponse({ success: false, error: err }));
  }

  return true;
});
```