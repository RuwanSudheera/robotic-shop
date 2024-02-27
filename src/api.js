const fetchRobotData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export { fetchRobotData };