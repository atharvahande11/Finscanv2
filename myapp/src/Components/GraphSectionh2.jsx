import React,{useState} from 'react'
import '../css/Graphsection.css'

const GraphSectionh2 = () => {
    const [activeTab, setActiveTab] = useState('home'); // State to track active tab
  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('about')}>About</button>
        <button onClick={() => setActiveTab('services')}>Services</button>
        <button onClick={() => setActiveTab('contact')}>Contact</button>
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
