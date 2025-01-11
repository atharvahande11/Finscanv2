import React, { useState } from 'react';
import data from './graphData.json'; 
import '../css/Graphsection.css';

const GraphSectionh2 = () => {
  const [activeTab, setActiveTab] = useState('home'); 

  const renderTable = (rows) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.value}</td>
            <td>{row.percentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="graph-section-container">
      {/* Buttons for Tabs */}
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
          Most Active by Volume
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={activeTab === 'contact' ? 'active' : ''}
        >
          Good for Beginner
        </button>
      </div>

      {/* Content for Active Tab */}
      <div className="tab-content">
        {activeTab === 'home' && (
          <div className="scrollable-content">
            <h3>Top Gainers</h3>
            {renderTable(data.gainers)}
          </div>
        )}
        {activeTab === 'about' && (
          <div className="scrollable-content">
            <h3>Top Losers</h3>
            {renderTable(data.losers)}
          </div>
        )}
        {activeTab === 'services' && (
          <div className="scrollable-content">
            <h3>Most Active by Volume</h3>
            {renderTable(data.mostActive)}
          </div>
        )}
        {activeTab === 'contact' && (
          <div className="scrollable-content">
            <h3>Good for Beginners</h3>
            {renderTable(data.goodForBeginners)}
          </div>
        )}
      </div>
    </div>
  );
};

export default GraphSectionh2;
