```javascript
import { createModal } from '@modal/modal';

const modal = createModal({
  apiKey: 'your-api-key',
});

export const runModalTask = async (taskName, taskData) => {
  try {
    const task = await modal.runTask(taskName, taskData);
    const result = await task.getResult();
    return result;
  } catch (error) {
    console.error('Error running modal task:', error);
  }
};

export default modal;
```