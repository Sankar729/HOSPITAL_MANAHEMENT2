import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Department = () => {
  const departmentsArray =[
    {
      name: "pediatrics",
      imageUrl:"Departments/pediatrics.png",
    },
    {
      name: "orthopedics",
      imageUrl: "Departments/orthopedics.png", 
    },
    {
      name: "cardiology",
      imageUrl:"Departments/cardiology.png",
    },
    {
      name: "Neurology",
      imageUrl:"Departments/Neurology.png",
    },
    {
      name: "Oncology",
      imageUrl:"Departments/Oncology.png",
    },
    {
      name: "Radiology",
      imageUrl:"Departments/Radiology.png",
    },
    {
      name: "PhysicalTherapy",
      imageUrl:"Departments/PhysicalTherapy.png",
    },
    {
      name: "Deroatology",
      imageUrl:"Departments/Deroatology.png",
    },
    {
      name: "ENT",
      imageUrl:"Departments/ENT.png",
    },

  ];
  const responsive = {
    extralarge: {
      breakpoint: { max: 3000, min: 1234 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1234, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className='container departments'>
      <h2>Departments</h2>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["medium", "small"]}>
        {
          departmentsArray.map((depart, index)=>{
            return(
<div className='card' key={index}>
  <div className='depart-name'>{depart.name}</div>
  <img src={depart.imageUrl} alt={depart.name} />

</div>
            )
          })
        }
      </Carousel>
    </div>
  );
};

export default Department;
