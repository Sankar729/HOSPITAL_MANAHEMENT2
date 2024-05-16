import React from 'react';

const Biography = ({ imageUrl }) => {
  return (
    <div>
      <div className='Container biography'>
        <div className='banner'>
          <img src={imageUrl} alt="a.jpeg" />
        </div>
        <div className='banner'>
          <p>Biography</p>
          <h3>How are you?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsa quod, laborum voluptates doloremque dolor et omnis molestias magni sed!</p>
          <p>lorem10</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
