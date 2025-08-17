// functions/src/gallery.ts
import * as functions from "firebase-functions";
import { db } from "./firebaseAdmin";
export const getGalleryImages = functions.https.onRequest(async (req, res) => {
    try {
        const snapshot = await db.collection("galleryImages").get();
        const images = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(images);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
//# sourceMappingURL=gallery.js.map