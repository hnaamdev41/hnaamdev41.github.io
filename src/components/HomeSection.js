import React from 'react';
import { User, MapPin, Globe, Book, Camera } from 'lucide-react';

const HomeSection = ({ isDark }) => {
  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <User size={48} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Himanshu Naamdev</h1>
            <div className="flex items-center mt-2 text-gray-400">
              <MapPin size={16} className="mr-2" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education & Languages */}
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg`}>
            <div className="flex items-center mb-3">
              <Book className="mr-2 text-blue-400" />
              <h2 className="text-xl font-semibold">Education & Languages</h2>
            </div>
            <div className="space-y-2">
              <p>📚 Currently pursuing BCA (3rd year)</p>
              <div>
                <p className="text-gray-400 mb-1">Languages:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Hindi (Native)</li>
                  <li>English (Fluent)</li>
                  <li>Japanese (N4 Level)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg`}>
            <div className="flex items-center mb-3">
              <Camera className="mr-2 text-pink-400" />
              <h2 className="text-xl font-semibold">Interests & Hobbies</h2>
            </div>
            <div className="space-y-2">
              <p>🐱 Passionate about feeding and photographing stray cats</p>
              <p>📸 Check out my cat pictures and reels on Instagram:</p>
              <a 
                href="https://instagram.com/neko_dalal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                @neko_dalal
                <Globe size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded-lg`}>
          <h2 className="text-xl font-semibold mb-3">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['Android Development', 'Custom ROM Development', 'React', 'Node.js', 'Python', 'Java', 'Shell Scripting', 'Git'].map((skill) => (
              <div 
                key={skill}
                className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-2 rounded text-center text-sm`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;