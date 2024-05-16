import React from 'react';
import Hero from "../components/Hero";
import AppointmentForm from '../components/AppointmentForm';

const Appointment = () => {
  return (
    <>
    <Hero title={"Your Appointment | Sankar hospital"} imageUrl={"/a.png"}/>
    <AppointmentForm/>
      
    </>
  )
}

export default Appointment;
