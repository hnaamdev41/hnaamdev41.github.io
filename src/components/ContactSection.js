import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Github, Linkedin } from 'lucide-react';

const ContactSection = ({ isDark }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('your.email@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
      <h2 className="text-2xl mb-6">Contact Information</h2>
      
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Email */}
        <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-400" />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                <p className="text-base">your.email@example.com</p>
              </div>
            </div>
            <button 
              onClick={copyEmail}
              className={`p-2 rounded-md ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Telegram */}
        <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg`}>
          <div className="flex items-center space-x-3">
            <MessageSquare className="text-blue-400" />
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Telegram</p>
              <p className="text-base">@yourtelegram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium mb-4">Social Media</h3>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-md ${isDark ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <Github className="text-gray-400 hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-md ${isDark ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <Linkedin className="text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Send a Message</h3>
        <form className="space-y-4">
          <div>
            <label className={`block text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
              Name
            </label>
            <input
              type="text"
              className={`w-full p-2 rounded-md ${
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
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
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
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
                isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
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