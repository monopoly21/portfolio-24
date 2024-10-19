import React, { useState, useEffect } from 'react';

const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  // Format the time and date for Indian Standard Time (IST)
  const options = { 
    timeZone: 'Asia/Kolkata', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit',
  };
  
  const formattedDate = currentTime.toLocaleDateString('en-IN', options);
  const formattedTime = currentTime.toLocaleTimeString('en-IN', options);

  return (
    <div className="text-center">
      <h2 className="text-lg font-bold">Local Date and Time (IST)</h2>
      <p className="text-md">{formattedDate}</p>
      <p className="text-md">{formattedTime}</p>
    </div>
  );
};

export default LocalTime;
