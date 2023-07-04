```javascript
import { Dataset } from '@activeloopai/activeloop';

export const activeloop = {
  dataset: null,

  connect: async function() {
    this.dataset = new Dataset('braininabox');
    await this.dataset.connect();
  },

  save: async function(data) {
    await this.dataset.append(data);
  },

  search: async function(query) {
    const results = await this.dataset.filter(item => item.includes(query));
    return results;
  }
};
```