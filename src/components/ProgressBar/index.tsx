import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {

    const t = setInterval(() => {
        setWidth(prev => {
          if (prev >= 100) {
            clearInterval(t);
            return prev;
          }
          return prev + 1;
        });
      }, 100);

    return () => clearInterval(t);
    
  }, []);

  return (
    <div>
      <div
        style={{
          width: "200px",
          border: "1.5px solid green",
          height: "10px",
          borderRadius: "8px",
        }}
      >
        <div style={{backgroundColor:"yellow", height:"100%", borderRadius:"8px", width:`${width}%`}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
