import React from 'react';
import RecentPosts from './RecentPosts';

const BlogRecentPosts = () => {
  return (
    <div className="max-w-md mx-auto bg-[#1c0f2a] rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Recent Posts</h2>
      <div className="bg-[#140c1c] rounded-lg shadow-md p-4">
        <RecentPosts />
      </div>
    </div>
  );
};

export default BlogRecentPosts;
