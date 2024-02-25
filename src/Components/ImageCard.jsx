import React from 'react'

function ImageCard({ index }) {
    const randomNumber = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0GeXEsnl4H8VNLVh5Tau82OtxyfoPT_3jg&usqp=CAU"
          alt="300*300"
        />
      </div>

            <h2>Random Title {index+1}</h2>
            <p>${randomNumber}.99</p>
    </div>
  );
}

export default ImageCard
