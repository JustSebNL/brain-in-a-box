Shared Dependencies:

1. Exported Variables:
   - `activeloop`: The instance of Activeloop Storage API used across the application.
   - `modal`: The instance of Modal used for offloading tasks.
   - `supertokens`: The instance of Supertokens used for security and login.

2. Data Schemas:
   - `CommentSchema`: Schema for the comments added by the user.
   - `WebsiteSchema`: Schema for the websites saved as MHTML.
   - `VectorSchema`: Schema for the vector database.

3. DOM Element IDs:
   - `comment-box`: ID for the comment box element.
   - `website-capture`: ID for the website capture element.
   - `search-bar`: ID for the search bar element.
   - `vector-database`: ID for the vector database element.
   - `brain-in-a-box`: ID for the Brain in a Box element.
   - `deep-lake`: ID for the Deep Lake element.

4. Message Names:
   - `ADD_COMMENT`: Message name for adding a comment.
   - `ADD_WEBSITE`: Message name for adding a website.
   - `SEARCH_DATA`: Message name for searching data.

5. Function Names:
   - `addComment()`: Function to add a comment.
   - `addWebsite()`: Function to add a website.
   - `searchData()`: Function to search data.
   - `saveToActiveloop()`: Function to save data to Activeloop.
   - `runModalTask()`: Function to run a task in Modal.
   - `loginWithSupertokens()`: Function to login with Supertokens.