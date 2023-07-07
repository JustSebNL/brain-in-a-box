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

6. Advanced Features:
- Through a short key (set by user) or by right clicking the extension icon the user will be able to select the option to "record an action sequence" or a "browser handling sequence" for this function the extension will be using "playwright", which can be found on github. The recorded sequences will be stored in the vector database in a Playwright directory. The user should have the ability to "tag" each sequence for recognision and easy search. 
- create a chatbot and its interface that will be accessible by right in selecting talk to ghost. Then a small window will pop up in the bottom right corner with a chat bot, where are use Arkin, either right or talking to to prompt the database or the data user has saved the user will be able to perform searches here creates prompts for actions would like to execute order data users should be able to perform a wide range of actions that are related to an AI chatbot. The Chatbots can be configured by the user to use a range of different language models like open your eyes, chat, GPT, or hugging chat, open chat, bard, or in tropics, Claude, depending on which option the user selects, an API key might have to be set on board, chat, GPT, and for Claude
index data, ai learn from data, tag what files or data ai is not allowed to train on.  