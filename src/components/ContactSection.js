import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Github } from 'lucide-react';

const ContactSection = ({ isDark }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hnaamdev41@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      
      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Email */}
        <div className={`${isDark ? 'bg-gray-900/50' : 'bg-gray-100'} p-4 rounded-lg flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded">
              <Mail className="text-blue-400" size={20} />
            </div>
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
              <p className="font-medium">hnaamdev41@gmail.com</p>
            </div>
          </div>
          <button 
            onClick={copyEmail}
            className={`p-2 rounded hover:bg-gray-700/50 transition-colors`}
          >
            {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      {/* Social Media */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Social Media</h3>
        <div className="grid grid-cols-3 gap-4">
          <a
            href="https://github.com/hnaamdev41"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? 'bg-gray-900/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} 
              p-4 rounded-lg flex items-center gap-3 transition-colors`}
          >
            <div className="p-2 bg-gray-800 rounded">
              <Github className="text-white" size={20} />
            </div>
            <span>GitHub</span>
          </a>
          
          <a
            href="https://instagram.com/neko_dalal"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? 'bg-gray-900/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} 
              p-4 rounded-lg flex items-center gap-3 transition-colors`}
          >
            <div className="p-2 bg-pink-500 rounded">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span>Instagram</span>
          </a>

          <a
            href="https://t.me/HNaamdev41"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? 'bg-gray-900/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} 
              p-4 rounded-lg flex items-center gap-3 transition-colors`}
          >
            <div className="p-2 bg-blue-500 rounded">
              <MessageSquare className="text-white" size={20} />
            </div>
            <span>Telegram</span>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <h3 className="text-lg font-medium mb-4">Send a Message</h3>
        <form className="space-y-4">
          <div>
            <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
              Name
            </label>
            <input
              type="text"
              className={`w-full p-2 rounded-md ${
                isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'
              } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>
          <div>
            <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
              Email
            </label>
            <input
              type="email"
              className={`w-full p-2 rounded-md ${
                isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'
              } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>
          <div>
            <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
              Message
            </label>
            <textarea
              rows={4}
              className={`w-full p-2 rounded-md ${
                isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'
              } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;