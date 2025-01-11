import React,{useState} from 'react'
import '../css/Graphsection.css'

const GraphSectionh2 = () => {
    const [activeTab, setActiveTab] = useState('home'); // State to track active tab
  return (
    <div>
      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab('home')}
          className={activeTab === 'home' ? 'active' : ''}
        >
          Top Gainer
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={activeTab === 'about' ? 'active' : ''}
        >
          Top Loser
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={activeTab === 'services' ? 'active' : ''}
        >
          Most active by volume
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={activeTab === 'contact' ? 'active' : ''}
        >
          Good for beginner
        </button>
      </div>

      {/* Content Based on Active Tab */}
      <div className="tab-content">
        {activeTab === 'home' && <div>Welcome to the Home Page</div>}
        {activeTab === 'about' && <div>Learn more About Us</div>}
        {activeTab === 'services' && <div>Check out our Services</div>}
        {activeTab === 'contact' && <div>Get in Touch through our Contact Page</div>}
      </div>

    </div>
  )
}

export default GraphSectionh2
