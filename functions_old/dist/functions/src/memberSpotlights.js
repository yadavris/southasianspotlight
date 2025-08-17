// functions/src/memberSpotlights.ts
import * as functions from "firebase-functions";
import { db } from "./firebaseAdmin";
export const getMemberSpotlights = functions.https.onRequest(async (req, res) => {
    try {
        const snapshot = await db.collection("memberSpotlights").get();
        const spotlights = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(spotlights);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
//# sourceMappingURL=memberSpotlights.js.map