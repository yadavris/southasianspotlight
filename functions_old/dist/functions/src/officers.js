// functions/src/officers.ts
import * as functions from "firebase-functions";
import { db } from "./firebaseAdmin";
export const getOfficers = functions.https.onRequest(async (req, res) => {
    try {
        const snapshot = await db.collection("officers").get();
        const officers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(officers);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
//# sourceMappingURL=officers.js.map