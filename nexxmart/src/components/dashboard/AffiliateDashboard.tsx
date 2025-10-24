import { useEffect, useState } from "react";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useUserRole } from "@/hooks/useUserRole";
import AffiliateLinkCard from "@/components/dashboard/AffiliateLinkCard";

interface AffiliateLink {
  id: string;
  productId: string;
  url: string;
  clicks: number;
}

export default function AffiliateDashboard() {
  const { user, role } = useUserRole();
  const [links, setLinks] = useState<AffiliateLink[]>([]);

  useEffect(() => {
    if (role !== "affiliate" || !user?.uid) return;

    const q = query(collection(db, "affiliate_links"), where("affiliateId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const linkData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as AffiliateLink));
      console.log("Affiliate links snapshot:", linkData);
      setLinks(linkData);
    });

    return () => unsubscribe();
  }, [user?.uid, role]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Affiliate Links</h1>
      {links.length === 0 ? (
        <p>No affiliate links yet.</p>
      ) : (
        links.map((link) => <AffiliateLinkCard key={link.id} link={link} />)
      )}
    </div>
  );
}
