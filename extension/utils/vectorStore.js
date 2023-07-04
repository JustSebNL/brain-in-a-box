```javascript
import { activeloop } from '../lib/activeloop.js';

export const VectorData = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    content: { type: 'string' },
    type: { type: 'string' },
    timestamp: { type: 'string' },
  },
  required: ['id', 'content', 'type', 'timestamp'],
};

export async function saveToVector(data) {
  try {
    await activeloop.put(data.id, data);
  } catch (error) {
    console.error('Error saving to vector store:', error);
  }
}

export async function searchVector(query) {
  try {
    const results = await activeloop.search(query);
    return results;
  } catch (error) {
    console.error('Error searching vector store:', error);
  }
}
```