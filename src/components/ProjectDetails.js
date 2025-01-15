import React from 'react';
import { Code, ExternalLink, GitFork, Star, GitBranch } from 'lucide-react';

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

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-3 rounded-lg`}>
            <div className="flex items-center justify-between">
              <Star className="text-yellow-400" />
              <span>{project.stats?.stars || 0}</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">Stars</div>
          </div>
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-3 rounded-lg`}>
            <div className="flex items-center justify-between">
              <GitFork className="text-blue-400" />
              <span>{project.stats?.forks || 0}</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">Forks</div>
          </div>
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-3 rounded-lg`}>
            <div className="flex items-center justify-between">
              <GitBranch className="text-green-400" />
              <span>{project.stats?.branches || 0}</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">Branches</div>
          </div>
        </div>

        {/* Timeline */}
        {project.timeline && (
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} p-4 rounded`}>
            <h4 className="text-sm font-semibold mb-4">Development Timeline:</h4>
            <div className="relative pl-8 space-y-6">
              {project.timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-500 rounded-full" />
                  {index !== project.timeline.length - 1 && (
                    <div className="absolute -left-0.5 top-6 w-0.5 h-full bg-gray-700" />
                  )}
                  <div className="mb-1 text-gray-400">{item.date}</div>
                  <div>{item.update}</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images?.map((image, index) => (
            <div key={index} className="relative bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`${project.name} screenshot ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;