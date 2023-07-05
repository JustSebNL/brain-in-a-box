```javascript
import { init, getSession } from "supertokens-auth-react";

const supertokens = init({
    appInfo: {
        appName: "Website Comment Chrome Extension",
        apiDomain: "https://your-api-domain.com",
        websiteDomain: "https://your-website-domain.com",
    },
    recipeList: [
        // Add your recipes here
    ]
});

async function loginWithSupertokens(email, password) {
    try {
        const session = await getSession(email, password);
        return session;
    } catch (error) {
        console.error("Failed to login with Supertokens", error);
        return null;
    }
}

export { supertokens, loginWithSupertokens };
```