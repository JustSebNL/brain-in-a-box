```javascript
import React, { useState } from 'react';
import { saveToActiveloop } from '../utils/activeloop';
import { WebsiteSchema } from '../utils/schemas';

function WebsiteCapture() {
  const [url, setUrl] = useState('');

  const captureWebsite = async () => {
    try {
      const mhtml = await chrome.pageCapture.saveAsMHTML({tabId: chrome.tabs.TAB_ID_NONE});
      const websiteData = new Blob([mhtml], {type: 'multipart/related'});
      const website = new WebsiteSchema({url, mhtml: websiteData});
      await saveToActiveloop(website);
      setUrl('');
    } catch (error) {
      console.error('Failed to capture website:', error);
    }
  };

  return (
    <div id="website-capture">
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="Enter URL" />
      <button onClick={captureWebsite}>Capture Website</button>
    </div>
  );
}

export default WebsiteCapture;
```