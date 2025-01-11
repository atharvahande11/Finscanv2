import React from 'react';
import '../css/home.css';
import Homegraphcard from './Homegraphcard';
import GraphSectionh2 from './GraphSectionh2.jsx';
import data from './graphData.json'; 

function Home() {
  return (
    <>
      <div className="cardhead">
        <Homegraphcard name="NIFTY 50" value={29.345} percent={49.3} />
        <Homegraphcard name="NIFTY NEXT 50" value={29.345} percent={49.3} />
        <Homegraphcard name="NIFTY MIDCAP SELECT" value={29.345} percent={49.3} />
        <Homegraphcard name="NIFTY BANK" value={29.345} percent={49.3} />
        <Homegraphcard name="NIFTY FINANCIAL SERVICES" value={29.345} percent={49.3} />
      </div>
      <h1>Corporate Action</h1>
      <div className="corporatesec">
        <div className="graphsection">
          <GraphSectionh2 />
        </div>
        <div className="splitssec">
          <h3>Splits</h3>
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Ratio</th>
                <th>Ex-Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ambuja cement</td>
                <td>10:1</td>
                <td>2025-01-16</td>
              </tr>
              <tr>
                <td>Ambuja cement</td>
                <td>10:1</td>
                <td>2025-01-16</td>
              </tr>
              <tr>
                <td>Ambuja cement</td>
                <td>10:1</td>
                <td>2025-01-16</td>
              </tr>
              <tr>
                <td>Ambuja cement</td>
                <td>10:1</td>
                <td>2025-01-16</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
