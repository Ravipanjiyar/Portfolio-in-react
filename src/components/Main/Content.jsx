import React, { useState } from 'react';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import '../../App.css';

function Content() {
  const [activeTab, setActiveTab] = useState('About'); // Default active tab is 'About'

  // Function to handle tab change
  const handleTabChange = (tab) => {
    console.log('Changing tab to:', tab);
    setActiveTab(tab);
  };

  // Function to render the active component based on activeTab state
  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
        case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className='second'>
      <nav className='nav'>
        <ul className="navbar-list">
          <li className="navbar-item">
            <button className={`navbar-link ${activeTab == 'About' ? 'active' : ''}`} onClick={() => handleTabChange('About')}>
              About
            </button>
          </li>
          <li className="navbar-item">
            <button className={`navbar-link ${activeTab == 'Resume' ? 'active' : ''}`} onClick={() => handleTabChange('Resume')}>
              Resume
            </button>
          </li>
          <li className="navbar-item">
            <button className={`navbar-link ${activeTab == 'Portfolio' ? 'active' : ''}`} onClick={() => handleTabChange('Portfolio')}>
              Portfolio
            </button>
          </li>
          <li className="navbar-item">
            <button className={`navbar-link ${activeTab == 'Contact' ? 'active' : ''}`} onClick={() => handleTabChange('Contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Render the active content based on activeTab */}
      {renderContent()}
    </div>
  );
}

export default Content;
