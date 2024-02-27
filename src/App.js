import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import { fetchRobotData } from './api';

function App() {
  const [robotData, setRobotData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRobotData();
        setRobotData(data);
      } catch (error) {
        console.error('Error setting data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Homepage robots={robotData} />
    </div>
  );
}

export default App;