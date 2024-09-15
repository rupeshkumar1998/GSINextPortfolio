import React, { useState, useEffect } from 'react';
import { FaUser, FaCalendarAlt, FaComments } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import BlogDescription from './BlogDescription';
import { useLocation } from 'react-router-dom'; // To get blogId from URL

const BlogBloger = ({ buttonText }) => {
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [blogData, setBlogData] = useState(null);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const blogId = queryParams.get("id");

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${blogId}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data = await response.json();
        setBlogData(data);
        setComments(data.comments || []); // Assuming comments are part of the blog data
      } catch (err) {
        console.error('Failed to fetch blog data', err);
      }
    };

    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      const currentDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date());
      setComments([...comments, { text: newComment, date: currentDate }]);
      setNewComment('');
    }
  };

  if (!blogData) return <p>Loading...</p>;

  return (
    <div className="relative inline-block p-4 bg-black rounded-lg shadow-lg">
      {/* Image with Button */}
      <div className="relative">
        <img src={blogData.blogImage} alt="Blogger" className="rounded-lg w-full h-auto" />
        <button
          className="absolute top-2 right-2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm"
          style={{ whiteSpace: 'nowrap' }}
        >
          {buttonText}
        </button>
      </div>

      {/* Author, Date, and Comments */}
      <div className="mt-4 flex items-center text-white space-x-4">
        {/* Author */}
        <div className="flex items-center space-x-2 hover:text-purple-400">
          <FaUser />
          <span>{blogData.bloggerName}</span>
        </div>

        {/* Date */}
        <div className="flex items-center space-x-2 hover:text-purple-400">
          <FaCalendarAlt />
          <span>{formatDate(blogData.blogDate)}</span>
        </div>

        {/* Comments Button */}
        <button
          className="bg-[#050709] text-white hover:text-purple-400 px-4 py-2 rounded-full text-sm flex items-center space-x-2"
          onClick={() => setShowModal(true)}
        >
          <FaComments />
          <span>Comments</span>
        </button>
      </div>

      <p className="text-white pb-2">
        {blogData.aboutBlogger}
      </p>
      <hr className="border-t border-purple-500 my-4" />
      <BlogDescription blogId={blogId} />

      {/* Comment Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Modal Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-800 opacity-90"></div>

          {/* Modal Content */}
          <div className="relative bg-black p-6 rounded-lg w-1/2 z-10">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setShowModal(false)}
            >
              <IoMdClose />
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Comments</h2>

            {/* Comments Section */}
            <div className="max-h-64 overflow-y-auto mb-4">
              {comments.length ? (
                comments.map((comment, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 text-white p-2 rounded mb-2"
                  >
                    <p>{comment.text}</p>
                    <p className="text-xs text-gray-400">{formatDate(comment.date)}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-300">No comments yet.</p>
              )}
            </div>

            {/* Comment Input Section */}
            <form onSubmit={handleCommentSubmit} className="flex items-center">
              <input
                type="text"
                className="flex-1 p-2 border border-gray-500 rounded-lg bg-gray-900 text-white"
                placeholder="Type a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                type="submit"
                className="ml-2 bg-purple-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogBloger;
