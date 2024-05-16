import React from 'react';

const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className='banner'>
        <h1>{title}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae consequuntur optio molestiae ullam quas ipsa odit, temporibus quibusdam animi doloribus sapiente sit nostrum quae! Similique molestias ad, in quos necessitatibus excepturi reprehenderit minima? Dignissimos similique veritatis dicta quis, quidem vel minus blanditiis! Eius a iste iure officiis alias ratione? Consectetur, tempora. Commodi hic asperiores libero, sit placeat porro vero sint unde neque quis incidunt eligendi laudantium reprehenderit tempora quod magnam modi illum ducimus odit necessitatibus fugit, eius nisi. Eligendi quidem dolorem neque odio nihil nostrum perspiciatis illo sint architecto, explicabo, ad accusantium hic atque vitae dolore doloribus fugiat necessitatibus optio.</p>
      </div>
      <div className='banner'>   
        <img src={imageUrl} alt="hero"className='animated-image' />
        <samp>
          <img src="/vector.png" alt="vector" />
        </samp>   
      </div>
    </div>
  );
};

export default Hero;
