import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  // Initial state for form fields and errors
  const [formData, setFormData] = useState({
    senderFirstName: '',
    senderLastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Form validation function
  const validate = () => {
    let formErrors = {};

    // Validation rules for each form field
    if (!formData.senderFirstName) formErrors.senderFirstName = "First Name is required!";
    if (!formData.senderLastName) formErrors.senderLastName = "Last Name is required!";
    
    if (!formData.email) {
      formErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid Email!";
    }

    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone Number is required!";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      formErrors.phoneNumber = "Phone Number must be 10 digits!";
    }

    if (!formData.subject) formErrors.subject = "Subject is required!";
    if (!formData.message) formErrors.message = "Message is required!";

    setErrors(formErrors);

    // Check if there are any errors
    return Object.keys(formErrors).length === 0;
  };

  // Handling input changes and updating form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before proceeding
    if (!validate()) {
      return; // Stop if validation fails
    }

    try {
      // Send form data via POST request to the API
      const response = await axios.post('http://localhost:4000/api/v1/message/send', formData);
      console.log(response.data);  // Handle success response
      alert("Message Sent Successfully!");
      // Reset form fields and errors
      setFormData({
        senderFirstName: '',
        senderLastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error(error.response.data);  // Handle error response
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="p-20 flex items-center justify-center" id="contact">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-40">
        {/* Contact Form Section */}
        <div
          className="bg-[#2D0F40] text-white rounded-lg p-8 w-4/5 md:w-[600px] lg:w-4/5 shadow-lg"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <h2 className="textlinearGradient text-4xl font-bold text-center mb-4">
            Contact Me!
          </h2>
          <p className="text-center mb-8">
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </p>

          {/* Form starts here */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="senderFirstName"
                  value={formData.senderFirstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 ${
                    errors.senderFirstName ? 'ring-red-500' : 'focus:ring-purple-400'
                  }`}
                />
                {errors.senderFirstName && <p className="text-red-500">{errors.senderFirstName}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="senderLastName"
                  value={formData.senderLastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 ${
                    errors.senderLastName ? 'ring-red-500' : 'focus:ring-purple-400'
                  }`}
                />
                {errors.senderLastName && <p className="text-red-500">{errors.senderLastName}</p>}
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className={`bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 ${
                    errors.email ? 'ring-red-500' : 'focus:ring-purple-400'
                  }`}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 ${
                    errors.phoneNumber ? 'ring-red-500' : 'focus:ring-purple-400'
                  }`}
                />
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
              </div>
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`bg-black text-white placeholder-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 mb-4 ${
                  errors.subject ? 'ring-red-500' : 'focus:ring-purple-400'
                }`}
              />
              {errors.subject && <p className="text-red-500">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full bg-black text-white placeholder-gray-500 p-2 rounded-md h-32 mb-4 focus:outline-none focus:ring-2 ${
                  errors.message ? 'ring-red-500' : 'focus:ring-purple-400'
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 md:w-2/5 bglinearGradient text-white font-bold py-2 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Icons */}
        <div
          className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 text-xl md:text-4xl"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <a
            href="https://github.com"
            className="block bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
          >
            <FaGithub className="text-white" />
          </a>
          <a
            href="https://twitter.com"
            className="block bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
          >
            <FaTwitter className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            className="block bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
          >
            <FaLinkedin className="text-white" />
          </a>
          <a
            href="https://facebook.com"
            className="block bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
          >
            <FaFacebook className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
