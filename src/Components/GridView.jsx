import React from 'react'
import ImageCard from './ImageCard';
import '../App.css'
function GridView() {
   const length = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
   const randomArray = Array.from({ length }, () =>
     Math.floor(Math.random() * 100)
   );
    return (
      <div className="App">
        {randomArray.map((e, i) => {
          return <ImageCard key={i} index={i} />;
        })}
      </div>
    );
}

export default GridView
