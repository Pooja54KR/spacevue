import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import MissionChart from './components/MissionChart';
import './styles/dashboard.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [missionData, setMissionData] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then((response) => {
        setMissionData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='container'>
      {!isLoggedIn ? (
        <LoginPage handleLogin={handleLogin} />
      ) : (
        <div className='authenticated-content'>
          <div className="dashboard">
            <Dashboard missionData={missionData} />
          </div>
          <div className="mission-chart">
            <MissionChart missionData={missionData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
