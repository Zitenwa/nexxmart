// src/components/dashboard/AdminDashboard.tsx
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import { useUserRole } from "@/hooks/useUserRole";

interface FirestoreEntity {
  id: string;
  [key: string]: any;
}

export default function AdminDashboard() {
  const { user, role } = useUserRole();
  const [data, setData] = useState<Record<string, FirestoreEntity[]>>({});

  useEffect(() => {
    if (role !== "admin" || !user) return;

    const collections = ["users", "stores", "products", "affiliate_links", "orders"];
    const unsubscribers = collections.map((col) =>
      onSnapshot(collection(db, col), (snapshot) => {
        setData((prev) => ({
          ...prev,
          [col]: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        }));
      })
    );

    return () => unsubscribers.forEach((u) => u());
  }, [role, user]);

  if (role !== "admin") {
    return <p className="p-4 text-red-600">Access denied — admin only.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {Object.keys(data).map((col) => (
        <div key={col} className="mb-6">
          <h2 className="text-xl font-semibold mb-2 capitalize">{col}</h2>
          <div className="border rounded-lg p-3 bg-gray-50">
            {data[col].length === 0 ? (
              <p>No documents found.</p>
            ) : (
              <ul className="space-y-2">
                {data[col].map((doc) => (
                  <li key={doc.id} className="p-2 border rounded bg-white">
                    <pre className="text-sm overflow-x-auto">
                      {JSON.stringify(doc, null, 2)}
                    </pre>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
