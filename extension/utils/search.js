import { activeloop } from '../lib/activeloop.js';

export const searchVector = async (query) => {
  try {
    const vectorData = await activeloop.get('Braininabox');
    const results = vectorData.filter(item => item.content.includes(query));
    return results;
  } catch (error) {
    console.error('Error searching vector database:', error);
  }
};