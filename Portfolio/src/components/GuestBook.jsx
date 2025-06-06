import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase'; // make sure your firebase.js exports 'db' correctly
import { Filter } from 'bad-words';
import xss from 'xss';

const filter = new Filter();
filter.replaceRegex = /./g; // replace each character in bad word
filter.replaceWith = '#';   // censor with '#'

const GuestBook = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', message: '', phone: '' });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchMessages = async () => {
      const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (isMounted) setMessages(messagesData);
    };
    fetchMessages();

    return () => { isMounted = false; };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone) {
      return; // silently ignore bots
    }

    const now = Date.now();

    if (now - lastSubmitTime < 30000) {
      alert('Please wait a few moments before submitting again.');
      return;
    }

    const sanitizedName = xss(formData.name.trim());
    const sanitizedMessage = xss(formData.message.trim());

    // Clean profanity by replacing bad words with #
    const cleanName = filter.clean(sanitizedName);
    const cleanMessage = filter.clean(sanitizedMessage);

    setLastSubmitTime(now); 

    try {
      await addDoc(collection(db, 'guestbook'), {
        name: cleanName,
        message: cleanMessage,
        createdAt: serverTimestamp(),
      });
      setFormData({ name: '', message: '', phone: '' });

      // Refresh messages after submit
      const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(messagesData);
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  const timeAgo = (timestamp) => {
    if (!timestamp) return '';
    let date;
    try {
      date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    } catch {
      return '';
    }
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;
    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutes ago`;
    return 'Just now';
  };

  return (
    <Draggable handle=".modal-header" cancel="input,textarea,button">
      <div
        className="w-[400px] max-w-[90vw] h-[500px] rounded-xl shadow-xl select-text font-sans fixed top-[12vh] right-10 -translate-x-1/2 z-[1500] flex flex-col
          bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        <div
          className="modal-header px-6 py-4 border-b border-gray-300 dark:border-gray-700 cursor-move flex justify-between items-center rounded-t-xl
            bg-gradient-to-r from-blue-600 to-blue-500 dark:from-purple-700 dark:to-purple-600 text-white select-none"
        >
          <h2 className="font-semibold text-xl tracking-wide m-0">Guestbook</h2>
          <button
            onClick={onClose}
            aria-label="Close guestbook"
            className="bg-transparent border-none text-white text-3xl font-bold leading-none cursor-pointer p-0 m-0 hover:text-gray-300 transition"
          >
            ×
          </button>
        </div>

        <div className="modal-content p-6 max-h-[60vh] overflow-y-auto">
          <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            Thanks for visiting, feel free to sign the book!
          </p>
          <form onSubmit={handleSubmit} className="mb-8">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100 text-base placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none
                focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Write a message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={2}
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100 text-base placeholder-gray-400 dark:placeholder-gray-500 resize-vertical
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-[120px] mx-auto block py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700
                text-white font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Sign
            </button>
          </form>

          <div>
            <h3 className="mb-4 font-semibold text-2xl border-b border-gray-300 dark:border-gray-700 pb-2">Guests</h3>
            {messages.length === 0 ? (
              <p className="italic text-gray-500 dark:text-gray-400">No guests yet. Be the first!</p>
            ) : (
              <ul className="list-none p-0 m-0 space-y-5">
                {messages.map(({ id, name, message, createdAt }) => (
                  <li
                    key={id}
                    className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-none"
                  >
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <strong className="text-gray-800 dark:text-gray-200">{name}</strong>
                      <time className="italic">{timeAgo(createdAt)}</time>
                    </div>
                    <p className="whitespace-pre-wrap text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      {message}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default GuestBook;
