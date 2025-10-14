
'use client';

import { useState } from 'react';

export default function SocialSharePreview() {
  const [link, setLink] = useState('');

  return (
    <div>
      <h2>Social Share Preview</h2>
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter a link"
      />
      <div>
        {/* This is a simplified preview. A real implementation would fetch metadata from the link. */}
        <h3>Preview</h3>
        <p>{link}</p>
      </div>
    </div>
  );
}
