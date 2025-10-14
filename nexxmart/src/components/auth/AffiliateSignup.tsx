
'use client';

import { useState } from 'react';

export default function AffiliateSignup() {
  const [socialHandle, setSocialHandle] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle affiliate signup logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Affiliate Signup</h2>
      <input
        type="text"
        value={socialHandle}
        onChange={(e) => setSocialHandle(e.target.value)}
        placeholder="Social Media Handle"
        required
      />
      <input
        type="text"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        placeholder="WhatsApp Number"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
