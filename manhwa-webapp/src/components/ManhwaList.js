import React, { useState, useEffect } from 'react';
import ManhwaItem from './ManhwaItem';
import mockData from '../data.json';  // Assuming the file is located in src/data.json

const ManhwaList = () => {
  const [manhwaList, setManhwaList] = useState([]);

  useEffect(() => {
    // Fetch the mock data (you can replace this with an API call)
    setManhwaList(mockData);
  }, []);

  return (
    <div className="manhwa-list">
      {manhwaList.map((manhwa) => (
        <ManhwaItem
          key={manhwa.id}
          title={manhwa.title}
          genre={manhwa.genre}
          description={manhwa.description}
          image={manhwa.image}
        />
      ))}
    </div>
  );
};

export default ManhwaList;
