import React, { useState } from 'react';

const BlogLeaveReply = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Checkbox Checked:', isChecked);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#140c1c] p-8 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold text-white mb-4">Leave a Reply</h2>
      <p className='text-gray-400 pb-1'>Note: Your email will not be published</p>
      <div className="mb-4">
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          id="name"
          className="bg-black text-white placeholder-gray-500 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-purple"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          className="bg-black text-white placeholder-gray-500 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-purple"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-1">
        <label htmlFor="message" className="sr-only">Your message</label>
        <textarea
          id="message"
          className="bg-black text-white placeholder-gray-500 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-purple"
          placeholder="Your Reply/Comments"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-500">
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
            className="mr-2"
          />
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-[#2a1454] to-[#8750f7] hover:from-[#8750f7] hover:to-[#2a1454] text-white font-bold py-2 px-4 rounded-full w-full hover:transition-all hover:duration-1000 hover:ease-in-out"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default BlogLeaveReply;
