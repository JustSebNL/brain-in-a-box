Shared Dependencies:

1. **Exported Variables**: 
   - `activeloop`: The instance of Activeloop Storage API used across the extension.
   - `supertokens`: The instance of Supertokens used for security and login.
   - `modal`: The instance of Modal used for offloading tasks.

2. **Data Schemas**: 
   - `VectorData`: The schema for the data stored in the vector database.

3. **DOM Element IDs**: 
   - `search-bar`: The ID of the search bar element.
   - `save-button`: The ID of the save button element.
   - `comment-box`: The ID of the comment box element.
   - `website-capture`: The ID of the website capture element.
   - `vector-database`: The ID of the vector database element.

4. **Message Names**: 
   - `SAVE_TO_VECTOR`: Message name for saving data to the vector database.
   - `SEARCH_VECTOR`: Message name for searching the vector database.

5. **Function Names**: 
   - `saveToVector`: Function to save data to the vector database.
   - `searchVector`: Function to search the vector database.
   - `captureSelection`: Function to capture selected text.
   - `captureMHTML`: Function to capture the website as MHTML.

6. **CSS Files**: 
   - `tailwind.css`: Tailwind CSS file used across the extension for styling.
   - `main.css`: Main CSS file used across the extension for additional custom styling.

7. **React Components**: 
   - `SearchBar`: Component for the search bar.
   - `SaveButton`: Component for the save button.
   - `CommentBox`: Component for the comment box.
   - `WebsiteCapture`: Component for the website capture functionality.
   - `VectorDatabase`: Component for displaying the vector database.

8. **JavaScript Libraries**: 
   - `React`: Used across all JS files for creating the user interface.
   - `NextJS`: Used in popup.js, options.js, and background.js for routing and server-side rendering.
   - `Svelte`: Used in content.js for reactive programming.