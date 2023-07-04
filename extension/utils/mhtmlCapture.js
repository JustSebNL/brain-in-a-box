```javascript
// Importing required dependencies
import { modal } from '../lib/modal.js';

// Function to capture the website as MHTML
export async function captureMHTML() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.pageCapture.saveAsMHTML({tabId: tabs[0].id}, function(mhtmlData) {
        const reader = new FileReader();
        reader.onload = function() {
          const mhtmlContent = reader.result;
          // Offloading the task of saving MHTML content to the vector database to Modal
          modal.run('saveToVector', {data: mhtmlContent, type: 'MHTML'})
            .then(result => resolve(result))
            .catch(error => reject(error));
        };
        reader.readAsText(mhtmlData);
      });
    });
  });
}
```