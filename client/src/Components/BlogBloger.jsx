import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaComments } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import BlogDescription from './BlogDescription';

const BlogBloger = ({ imageUrl, authorName, blogDate, buttonText }) => {
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([
    { text: 'This is a great post!', date: 'September 10, 2024' },
    { text: 'Really insightful, thanks for sharing!', date: 'September 11, 2024' },
    { text: 'Loved the blog, keep it up!', date: 'September 12, 2024' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setComments([...comments, { text: newComment, date: currentDate }]);
      setNewComment('');
    }
  };

  return (
    <div className="relative inline-block p-4 bg-black rounded-lg shadow-lg">
      {/* Image with Button */}
      <div className="relative">
        <img src={imageUrl} alt="Blog" className="rounded-lg w-full h-auto" />
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
          <span>{authorName}</span>
        </div>

        {/* Date */}
        <div className="flex items-center space-x-2 hover:text-purple-400">
          <FaCalendarAlt />
          <span>{blogDate}</span>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo
        alias harum adipisci mollitia at reiciendis et autem sit est quis
        dolores qui, accusantium ipsa eius...
      </p>
      <hr className="border-t border-purple-500 my-4" />
      <BlogDescription />

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
                    <p className="text-xs text-gray-400">{comment.date}</p>
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
