import React, { useState } from 'react';
import xss from 'xss';
const myEmailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize inputs using xss to prevent any malicious content
    const sanitizedName = xss(formData.name);
    const sanitizedEmail = xss(formData.email);
    const sanitizedSubject = xss(formData.subject);
    const sanitizedMessage = xss(formData.message);

    // Construct the mailto link with the sanitized subject and message
    const body = `${sanitizedMessage}\n\nFrom,\n${sanitizedName}`;
    const mailtoLink = `mailto:${myEmailAddress}?subject=${encodeURIComponent(sanitizedSubject)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's email client with the pre-filled details
    window.location.href = mailtoLink;

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="max-w-lg mx-auto p-10 mt-5">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-gray-700"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            autocomplete='name'
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-gray-700"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            autoComplete='email'
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="block text-gray-700"></label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder='Subject'
            autoComplete='subject'
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-gray-700"></label>
          <textarea
            id="message"
            name="message"
            placeholder='Message'
            autoComplete='message'
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
          ></textarea>
        </div>
        <button
          type="submit"
          className="dark:bg-purple-600 dark:hover:bg-purple-700 w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
