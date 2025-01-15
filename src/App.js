import React, { useState } from 'react';
import { VSCodeTabs, Minimap } from './components/VSCodeTabs';
import ProjectDetails from './components/ProjectDetails';
import ContactSection from './components/ContactSection';
import GithubStats from './components/GithubStats';
import HomeSection from './components/HomeSection';
import { 
  Folder, ChevronRight, ChevronDown, Code, Home, 
  Mail, FolderOpen, Sun, Moon, User 
} from 'lucide-react';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(true);

  const projects = [
    { 
      name: 'Cat Finding 2024',
      tech: 'React Native, Node.js, MongoDB',
      description: 'A mobile application to help locate and rescue stray cats',
      year: '2024',
      timeline: [
        { date: 'January 2024', update: 'Initial Release with basic cat location tracking' },
        { date: 'February 2024', update: 'Added real-time location updates and notifications' },
        { date: 'March 2024', update: 'Implemented community features and chat system' },
        { date: 'April 2024', update: 'Integrated AI-powered cat recognition and health assessment' }
      ],
      tags: ['mobile', 'web', 'ai'],
      github: 'https://github.com/hnaamdev41/cat-finding',
      images: [
        '/assets/cat-finding-1.jpg',
        '/assets/cat-finding-2.jpg'
      ],
      status: 'active'
    },
    { 
      name: 'Pokemon Telegram Bot',
      tech: 'Python, Telegram API, JSON',
      description: 'A comprehensive Telegram bot that provides Pokemon information, battle simulation, and team building features',
      year: '2023',
      tags: ['bot', 'ai'],
      github: 'https://github.com/hnaamdev41/pokemon-bot',
      images: [
        '/assets/pokemon-1.jpg',
        '/assets/pokemon-2.jpg'
      ],
      status: 'completed'
    },
    {
      name: 'Solo Levelling RPG Game',
      tech: 'Python, Discord API, JSON',
      description: 'A Discord-based RPG game inspired by Solo Levelling manhwa, featuring character progression, monster hunting, and guild systems',
      year: '2021',
      tags: ['game', 'bot'],
      github: 'https://github.com/hnaamdev41/solo-level',
      images: [
        '/assets/solo-1.jpg',
        '/assets/solo-2.jpg'
      ],
      status: 'completed'
    },
    {
      name: 'Custom ROM Development',
      tech: 'Android, Java, Shell Scripting',
      description: 'Custom Android ROM development focusing on performance optimization, battery life improvement, and enhanced user experience. Custom ROMs are modified versions of Android that offer additional features, better performance, and more customization options compared to stock Android.',
      year: '2021-2024',
      tags: ['mobile', 'system'],
      github: 'https://github.com/hnaamdev41/android_device_xiaomi_violet',
      images: [
        '/assets/rom-1.jpg',
        '/assets/rom-2.jpg'
      ],
      status: 'active',
      devices: [
        {
          name: 'Redmi Note 7 Pro',
          codename: 'violet',
          repo: 'https://github.com/hnaamdev41/android_device_xiaomi_violet'
        },
        {
          name: 'Poco X3',
          codename: 'surya/karna',
          repo: 'https://github.com/hnaamdev41/android_device_xiaomi_surya'
        },
        {
          name: 'Redmi Note 8 Pro',
          codename: 'begonia',
          repo: 'https://github.com/hnaamdev41/android_device_xiaomi_begonia'
        },
        {
          name: 'Poco F3/Mi 11x',
          codename: 'alioth/aliothin',
          repo: 'https://github.com/hnaamdev41/android_device_xiaomi_alioth'
        }
      ]
    }
  ];

  const [tabs, setTabs] = useState([
    { id: 'home', title: 'Home', type: 'home' },
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
  };

  const renderContent = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    
    if (currentTab?.type === 'project') {
      return <ProjectDetails project={currentTab.project} isDark={isDark} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomeSection isDark={isDark} />;
      case 'dashboard':
        return <GithubStats isDark={isDark} />;
      case 'contact':
        return <ContactSection isDark={isDark} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
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
        <div className={`w-64 border-r ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
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
                  className={`flex items-center p-1 rounded cursor-pointer ${activeTab === 'home' ? 'bg-gray-800' : ''}`}
                  onClick={() => handleTabClick('home')}
                >
                  <User size={16} className="mr-2 text-purple-400" />
                  <span>home</span>
                </div>

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
          
          <div className="flex-1 overflow-auto bg-gray-900">
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