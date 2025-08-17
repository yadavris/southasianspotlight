// functions/src/events.ts
import * as functions from "firebase-functions";
import { db } from "./firebaseAdmin";
export const getEvents = functions.https.onRequest(async (req, res) => {
    try {
        const snapshot = await db.collection("events").get();
        const events = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(events);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
//# sourceMappingURL=events.js.map