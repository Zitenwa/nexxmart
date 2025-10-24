// src/components/dashboard/AffiliateLinkCard.tsx
import React from "react";

interface AffiliateLinkCardProps {
  link: {
    id: string;
    productId: string;
    url: string;
    clicks: number;
  };
}

const AffiliateLinkCard: React.FC<AffiliateLinkCardProps> = ({ link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm mb-3 hover:shadow-md transition-shadow duration-200">
      <h2 className="font-bold text-lg mb-1">Product ID: {link.productId}</h2>
      <p className="text-blue-600 underline mb-1">
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.url}
        </a>
      </p>
      <p className="text-gray-600">Clicks: {link.clicks}</p>
    </div>
  );
};

export default AffiliateLinkCard;
