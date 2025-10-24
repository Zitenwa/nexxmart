
import React from 'react';

interface Store {
  id: string;
  name: string;
  products: string[];
}

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold">{store.name}</h2>
      <p className="text-gray-600">ID: {store.id}</p>
      <div>
        <h3 className="font-semibold mt-2">Products:</h3>
        {store.products.length > 0 ? (
          <ul className="list-disc list-inside">
            {store.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        ) : (
          <p>No products in this store.</p>
        )}
      </div>
    </div>
  );
};

export default StoreCard;
