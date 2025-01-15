import React from 'react';
import { X, Code, Home, Mail, FolderOpen } from 'lucide-react';

const Tab = ({ tab, isActive, onClose, onClick, isDark }) => {
  const getIcon = () => {
    switch (tab.type) {
      case 'dashboard':
        return <Home size={16} className="text-green-400" />;
      case 'project':
        return <Code size={16} className="text-blue-400" />;
      case 'contact':
        return <Mail size={16} className="text-pink-400" />;
      default:
        return <FolderOpen size={16} className="text-orange-400" />;
    }
  };

  return (
    <div 
      className={`flex items-center px-4 py-2 cursor-pointer border-t-2 ${
        isActive 
          ? `${isDark ? 'bg-gray-800' : 'bg-white'} border-blue-500` 
          : `${isDark ? 'bg-gray-900' : 'bg-gray-100'} border-transparent`
      } ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
      onClick={onClick}
    >
      {getIcon()}
      <span className="ml-2 truncate">{tab.title}</span>
      {onClose && (
        <button 
          className={`ml-2 p-1 rounded-md ${
            isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onClose(tab.id);
          }}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

const VSCodeTabs = ({ tabs, activeTabId, onTabClick, onTabClose, isDark }) => {
  return (
    <div className="flex border-b border-gray-700 bg-gray-900 overflow-x-auto">
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          tab={tab}
          isActive={activeTabId === tab.id}
          onClick={() => onTabClick(tab.id)}
          onClose={tabs.length > 1 ? () => onTabClose(tab.id) : null}
          isDark={isDark}
        />
      ))}
    </div>
  );
};

const Minimap = ({ content, isDark }) => {
  return (
    <div className={`w-20 border-l ${isDark ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
      <div className="h-full p-2 opacity-50 hover:opacity-100 transition-opacity">
        <div className="space-y-1">
          {/* Minimap content representation */}
          <div className="w-full h-1 bg-gray-700 rounded" />
          <div className="w-3/4 h-1 bg-gray-700 rounded" />
          <div className="w-1/2 h-1 bg-gray-700 rounded" />
          {/* Add more elements based on actual content */}
        </div>
      </div>
    </div>
  );
};

export { VSCodeTabs, Minimap };