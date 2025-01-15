import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

const ProjectDetails = ({ project, isDark }) => {
  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl mb-2">{project.name}</h3>
          <div className="flex gap-2">
            {project.tags?.map(tag => (
              <span key={tag} className={`px-2 py-1 ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              } rounded-full text-sm`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded text-sm ${
            project.status === 'active' ? 'bg-green-500/20 text-green-300' :
            project.status === 'completed' ? 'bg-blue-500/20 text-blue-300' :
            'bg-gray-500/20 text-gray-300'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="space-y-6">
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {project.description}
        </p>
        
        <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded`}>
          <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {project.tech}
          </p>
        </div>
        {/* Timeline only for Cat Finding 2024 */}
        {project.name === 'Cat Finding 2024' && project.timeline && (
          <div className={`${isDark ? 'bg-[#0d1117]' : 'bg-gray-100'} p-6 rounded-lg`}>
            <h2 className="text-xl mb-8">Development Timeline</h2>
            <div className="space-y-6">
              {project.timeline.map((item, index) => (
                <div key={index} className="grid grid-cols-[140px_10px_1fr] items-start">
                  {/* Date */}
                  <div className="text-blue-400 pt-2">
                    {item.date}
                  </div>
                  
                  {/* Dot and Line */}
                  <div className="relative flex justify-center h-full pt-3">
                    <div className="absolute w-2 h-2 rounded-full bg-blue-400" />
                    {index !== project.timeline.length - 1 && (
                      <div className="absolute top-5 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gray-700 h-[calc(100%+1.5rem)]" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className={`${isDark ? 'bg-[#161b22]' : 'bg-gray-200'} rounded-lg p-3`}>
                    <p className="text-gray-300">{item.update}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Device list for Custom ROM Development */}
        {project.name === 'Custom ROM Development' && project.devices && (
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded`}>
            <h4 className="text-sm font-semibold mb-4">Supported Devices:</h4>
            <div className="space-y-3">
              {project.devices.map((device, index) => (
                <div key={index} className={`p-3 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded`}>
                  <h5 className="font-medium">{device.name}</h5>
                  <p className="text-sm text-gray-400">Codename: {device.codename}</p>
                  <a 
                    href={device.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center mt-1"
                  >
                    <Code size={14} className="mr-1" />
                    View Device Source
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Links */}
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              <Code size={16} className="mr-1" />
              View Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-400 hover:text-green-300"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>

        {/* Screenshots */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="relative bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;