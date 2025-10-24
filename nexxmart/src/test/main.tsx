import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function TestPage() {
  const [docs, setDocs] = useState<any[]>([]);

  useEffect(() => {
    const run = async () => {
      await addDoc(collection(db, "test"), { createdAt: new Date() });
      const snap = await getDocs(collection(db, "test"));
      setDocs(snap.docs.map(d => d.data()));
    };
    run();
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h2>Vite + Firestore Test</h2>
      <pre>{JSON.stringify(docs, null, 2)}</pre>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TestPage />
  </React.StrictMode>
);
