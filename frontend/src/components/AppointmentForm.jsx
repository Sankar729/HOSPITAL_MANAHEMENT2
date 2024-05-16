import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState(""); 
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [docterFirstName, setDoctorFirstName] = useState("");
  const [docterLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const navigateTo = useNavigate();

  const [doctors, setDoctors] = useState([]);
  useEffect (() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/doctors", { withCredentials: true });
        setDoctors(data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName, 
          email, 
          phone, 
          nic, 
          dob, 
          gender, 
          appointment_Date: appointmentDate,
          docter_FirstName: docterFirstName, 
          docter_LastName: docterLastName, 
          address, 
          hasVisited,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className='container form-component appointment-form'>
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='number' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <input type='number' placeholder='NIC' value={nic} onChange={(e) => setNic(e.target.value)} />
            <input type='text' placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} /> 
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}> 
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type='data' placeholder='Appointment Date' value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
          </div>
          <div>
            <select value={department} onChange={(e) => {
              setDepartment(e.target.value);
              setDoctorFirstName("");
              setDoctorLastName("");
            }}> 
              <option value="">Select Department</option>
              {departmentsArray.map((depart, index) => (
                <option value={depart} key={index}>
                  {depart}
                </option>
              ))}
            </select>
            <select 
              value={`${docterFirstName} ${docterLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter(doctor => doctor.doctorDepartment === department)
                .map((doctor, index) => (
                  <option value={`${doctor.firstName} ${doctor.lastName}`} key={index}> 
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <textarea 
              rows="10" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Address'
            />
          </div>
          <div>
            <label htmlFor="visited">Have you visited before?</label>
            <input 
              id="visited" 
              type="checkbox" 
              checked={hasVisited} 
              onChange={(e) => setHasVisited(e.target.checked)}
            />
          </div>
          <div style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}>
            <p style={{marginBottom: 0}}>Already Registered?</p>
            <Link to={"/Login"} style={{textDecoration: "none", alignItems: "center"}}>Login Now</Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type='submit'>GET Appointment</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
