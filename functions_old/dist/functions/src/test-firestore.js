import { Firestore } from '@google-cloud/firestore';
const db = new Firestore();
async function test() {
    const docRef = db.collection('test').doc('hello');
    await docRef.set({ message: 'Hello Firestore!' });
    const snapshot = await docRef.get();
    console.log('Document data:', snapshot.data());
}
test().catch(console.error);
//# sourceMappingURL=test-firestore.js.map