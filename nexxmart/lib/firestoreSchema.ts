// src/lib/firestoreSchema.ts

export interface Vendor {
  vendorId: string;
  companyName: string;
  email: string;
  phone?: string;
  status: 'pending' | 'approved' | 'suspended';
  csCartStoreId?: string;
  createdAt: string;
}

export interface Affiliate {
  affiliateId: string;
  fullName: string;
  email: string;
  referralCode: string;
  earnings: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface Product {
  productId: string;
  vendorId: string;
  title: string;
  price: number;
  category?: string;
  stock: number;
  syncedAt: string;
}

export interface Order {
  orderId: string;
  productId: string;
  buyerEmail: string;
  affiliateId?: string;
  vendorId: string;
  status: 'pending' | 'completed' | 'cancelled';
  amount: number;
  createdAt: string;
}

export interface SyncLog {
  logId: string;
  type: 'vendor' | 'affiliate' | 'product' | 'order';
  status: 'success' | 'failed';
  message?: string;
  timestamp: string;
}

export interface Payout {
  payoutId: string;
  userType: 'vendor' | 'affiliate';
  userId: string;
  amount: number;
  status: 'pending' | 'paid';
  period: string;
  processedAt: string;
}
