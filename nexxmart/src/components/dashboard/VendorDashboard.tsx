import { useEffect, useState } from "react";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useUserRole } from "@/hooks/useUserRole";
import StoreCard from "@/components/dashboard/StoreCard";

interface Store {
  id: string;
  name: string;
  products: string[];
}

export default function VendorDashboard() {
  const { user, role } = useUserRole();
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    if (role !== "vendor" || !user?.uid) return;

    const q = query(collection(db, "stores"), where("ownerId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const storeData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Store));
      console.log("Vendor stores snapshot:", storeData);
      setStores(storeData);
    });

    return () => unsubscribe();
  }, [user?.uid, role]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Stores</h1>
      {stores.length === 0 ? (
        <p>No stores yet.</p>
      ) : (
        stores.map((store) => <StoreCard key={store.id} store={store} />)
      )}
    </div>
  );
}
