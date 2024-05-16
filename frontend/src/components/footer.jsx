import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "7:00 AM - 11:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "11:00 AM - 1:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "6:00 AM - 11:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "Closed",
    },
    {
      id: 7,
      day: "Sunday",
      time: "10:00 AM - 4:00 PM",
    },
  ];

  return (
    <>
      <footer className='container'>
        <hr />
        <div className='content'>
          <div>
            <img src="/d.png" alt="logo" className='logo-img' />
          </div>

          <nav>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={"/appointment"}>Appointment</Link></li>
              <li><Link to={"/about"}>About</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <h4>Hours</h4>
          <ul>
            {hours.map(element => (
              <li key={element.id}>
                <span>{element.day}</span>
                <span>{element.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div>
            <FaPhone />
            <span>999-999-999</span>
          </div>
          <div>
            <MdEmail />
            <span>bhawanisankaracharya7@gmail.com</span>
          </div>
          <div>
            <FaLocationArrow />
            <span>Ilam Nepal</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
