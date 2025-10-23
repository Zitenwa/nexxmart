import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

// 🔐 Firebase config — use your actual env values
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function setupCollections() {
  console.log("⚙️ Setting up Nexxmart Firestore schema...");

  const collections = [
    "users",
    "stores",
    "products",
    "affiliate_links",
    "orders",
    "payouts",
    "notifications",
  ];

  for (const col of collections) {
    const ref = doc(db, `${col}/_schema`);
    await setDoc(ref, {
      initializedAt: serverTimestamp(),
      description: `Base schema placeholder for ${col} collection.`,
    });
    console.log(`✅ Created collection: ${col}`);
  }

  console.log("🎉 Firestore base collections initialized successfully!");
}

setupCollections().catch(console.error);
