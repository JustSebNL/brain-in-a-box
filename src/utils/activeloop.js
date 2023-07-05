```javascript
import { Dataset } from '@activeloopai/activeloop';

// Initialize Activeloop
const activeloop = new Dataset('activeloop.ai/braininabox');

// Function to save data to Activeloop
async function saveToActiveloop(data, schema) {
  try {
    await activeloop.append(data, schema);
  } catch (error) {
    console.error('Error saving to Activeloop:', error);
  }
}

// Function to search data in Activeloop
async function searchData(query) {
  try {
    const results = await activeloop.filter(item => item.includes(query));
    return results;
  } catch (error) {
    console.error('Error searching in Activeloop:', error);
  }
}

export { activeloop, saveToActiveloop, searchData };
```