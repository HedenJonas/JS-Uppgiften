// Fick denna av Chatgpt4o

import React from 'react';

const StarRating = ({ starRating }) => {
  const totalStars = 5;

  return (
    <div className='star-rating'>
      {Array.from({ length: totalStars }, (_, index) => (
        index < starRating ? (
          <i key={index} className='fa-sharp fa-solid fa-star'></i>
        ) : (
          <i key={index} className='fa-sharp fa-regular fa-star'></i>
        )
      ))}
    </div>
  );
}

export default StarRating;