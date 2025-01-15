import React, { useState } from 'react';
import { VSCodeTabs, Minimap } from './components/VSCodeTabs';
import ProjectDetails from './components/ProjectDetails';
import ContactSection from './components/ContactSection';
import GithubStats from './components/GithubStats';
import { 
  Folder, ChevronRight, ChevronDown, Code, Home, 
  Mail, FolderOpen, Sun, Moon
} from 'lucide-react';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDark, setIsDark] = useState(true);

  const githubStats = {
    commits: 523,
    stars: 128,
    forks: 34,
    views: 1243,
    languages: {
      JavaScript: 45,
      TypeScript: 30,
      Python: 15,
      CSS: 10
    }
  };

  const projects = [
    { 
      name: 'Cat Finding 2024',
      tech: 'React Native, Node.js, MongoDB',
      description: 'A mobile application to help locate and rescue stray cats',
      timeline: [
        { date: 'January 2024', update: 'Initial Release' },
        { date: 'February 2024', update: 'Added real-time location tracking' },
        { date: 'March 2024', update: 'Implemented community features' },
        { date: 'April 2024', update: 'Added cat recognition AI' }
      ],
      tags: ['mobile', 'web', 'ai'],
      github: 'https://github.com/yourusername/cat-finding',
      demo: 'https://cat-finding-demo.com',
      status: 'active'
    },
    { 
      name: 'Pokemon Telegram Bot',
      tech: 'Python, Telegram API, JSON',
      description: 'A Telegram bot that provides Pokemon information and features',
      year: '2023',
      tags: ['bot', 'ai'],
      github: 'https://github.com/yourusername/pokemon-bot',
      status: 'completed'
    },
    {
      name: 'Solo Levelling RPG Game',
      tech: 'Python, Discord API, JSON',
      description: 'A Discord-based RPG game inspired by Solo Levelling manhwa',
      year: '2021',
      tags: ['game', 'bot'],
      github: 'https://github.com/yourusername/solo-level',
      status: 'completed'
    },
    {
      name: 'Custom ROM Development',
      tech: 'Android, Java, Shell Scripting',
      description: 'Custom Android ROM development with enhanced features',
      year: '2021',
      tags: ['mobile', 'system'],
      github: 'https://github.com/yourusername/custom-rom',
      status: 'archived'
    }
  ];

  const [tabs, setTabs] = useState([
    { id: 'dashboard', title: 'Dashboard', type: 'dashboard' }
  ]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTabClose = (tabId) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1].id);
    }
    setTabs(newTabs);
  };

  const openProjectTab = (project) => {
    const projectTabId = `project-${project.name}`;
    if (!tabs.find(tab => tab.id === projectTabId)) {
      setTabs([...tabs, {
        id: projectTabId,
        title: project.name,
        type: 'project',
        project
      }]);
    }
    setActiveTab(projectTabId);
    setActiveProject(project);
  };

  const renderContent = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    
    if (currentTab?.type === 'project') {
      return <ProjectDetails project={currentTab.project} isDark={isDark} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <GithubStats stats={githubStats} isDark={isDark} />;
      case 'contact':
        return <ContactSection isDark={isDark} />;
      default:
        return null;
    }
  };

  return (
    <div className={`h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
      {/* VS Code Top Bar */}
      <div className={`absolute top-0 left-0 right-0 h-6 ${isDark ? 'bg-gray-900' : 'bg-gray-100'} flex items-center px-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center text-sm text-gray-400">portfolio.tsx - VS Code</div>
        <button 
          onClick={() => setIsDark(!isDark)}
          className={`p-1 rounded-md ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
        >
          {isDark ? (
            <Sun size={14} className="text-yellow-400" />
          ) : (
            <Moon size={14} className="text-blue-600" />
          )}
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex w-full pt-6">
        {/* Left Sidebar */}
        <div className={`w-64 border-r ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="p-2">
            <div 
              className="flex items-center p-1 rounded cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <Folder size={16} className="mx-2 text-blue-400" />
              <span>my-portfolio</span>
            </div>

            {isExpanded && (
              <div className="ml-4 space-y-1">
                <div 
                  className={`flex items-center p-1 rounded cursor-pointer ${activeTab === 'dashboard' ? 'bg-gray-800' : ''}`}
                  onClick={() => handleTabClick('dashboard')}
                >
                  <Home size={16} className="mr-2 text-green-400" />
                  <span>dashboard</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center p-1 rounded">
                    <ChevronDown size={16} />
                    <FolderOpen size={16} className="mx-2 text-orange-400" />
                    <span>projects</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {projects.map((project, index) => (
                      <div 
                        key={index}
                        className={`flex items-center p-1 rounded cursor-pointer ${
                          activeTab === `project-${project.name}` ? 'bg-gray-800' : ''
                        }`}
                        onClick={() => openProjectTab(project)}
                      >
                        <Code size={16} className="mr-2 text-blue-400" />
                        <span>{project.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  className={`flex items-center p-1 rounded cursor-pointer ${activeTab === 'contact' ? 'bg-gray-800' : ''}`}
                  onClick={() => handleTabClick('contact')}
                >
                  <Mail size={16} className="mr-2 text-pink-400" />
                  <span>contact</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <VSCodeTabs 
            tabs={tabs}
            activeTabId={activeTab}
            onTabClick={handleTabClick}
            onTabClose={handleTabClose}
            isDark={isDark}
          />
          
          <div className="flex-1 overflow-auto">
            <div className="h-full flex">
              <div className="flex-1 p-6">
                <div className="max-w-4xl mx-auto">
                  {renderContent()}
                </div>
              </div>
              <Minimap isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;