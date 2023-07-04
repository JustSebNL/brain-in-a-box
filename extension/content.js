```javascript
import { writable } from 'svelte/store';
import { captureSelection, captureMHTML } from './utils/selectionCapture.js';
import { saveToVector } from './utils/vectorStore.js';

// Create a writable store for the selected text
export const selectedText = writable('');

// Listen for right click event
document.addEventListener('contextmenu', function(event) {
  const selection = captureSelection();
  selectedText.set(selection);
});

// Listen for message from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'SAVE_TO_VECTOR') {
    if (request.dataType === 'text') {
      saveToVector(selectedText);
    } else if (request.dataType === 'mhtml') {
      captureMHTML().then(mhtml => {
        saveToVector(mhtml);
      });
    }
  }
});
```