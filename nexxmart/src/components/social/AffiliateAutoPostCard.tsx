
'use client';

import { useState } from 'react';

// This is a placeholder for the actual serverless function call
const autoPostToSocial = async (link: string) => {
  // In a real application, this would make a call to a serverless function
  // that uses a generative AI to create a social media post.
  console.log(`Generating post for link: ${link}`);
  return `Check out this amazing product: ${link} #ad #affiliatemarketing`;
};

export default function AffiliateAutoPostCard({ link }: { link: string }) {
  const [postContent, setPostContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePost = async () => {
    if (!link) {
      alert('Please provide a link to share.');
      return;
    }
    setIsGenerating(true);
    try {
      const content = await autoPostToSocial(link);
      setPostContent(content);
    } catch (error) {
      console.error('Error generating post:', error);
      alert('Failed to generate post. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Automated Social Posting</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">Generate a social media post for your link</p>
          <div className="mt-4">
            <button
              onClick={handleGeneratePost}
              disabled={isGenerating || !link}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
            >
              {isGenerating ? 'Generating...' : 'Generate Post'}
            </button>
          </div>
          {postContent && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Generated Post:</h3>
              <textarea
                className="w-full h-32 p-2 border rounded mt-2"
                value={postContent}
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
