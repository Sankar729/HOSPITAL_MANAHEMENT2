import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';

const AboutUs = () => {
  return (
    <>
    <Hero
    title={"learn more about Hospital"}
    imageUrl={"d.png"}
    />
    <Biography imageUrl={"/e.png"}/>
      
    </>
  );
};

export default AboutUs;
