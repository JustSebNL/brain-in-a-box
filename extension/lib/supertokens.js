```javascript
import { init, getSession, createNewSession } from "supertokens-website";

const websiteDomain = "https://your-website-domain.com";
const apiDomain = "https://your-api-domain.com";

init({
    apiDomain,
    websiteDomain,
});

const supertokens = {
    getSession: async () => {
        try {
            const session = await getSession();
            return session;
        } catch (error) {
            console.error("Failed to get session", error);
            return null;
        }
    },
    createNewSession: async (userId, jwtPayload = {}, sessionData = {}) => {
        try {
            const session = await createNewSession(userId, jwtPayload, sessionData);
            return session;
        } catch (error) {
            console.error("Failed to create new session", error);
            return null;
        }
    },
};

export default supertokens;
```