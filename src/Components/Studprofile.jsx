import React from 'react';
import './Studprofile.css';
import img from '../Images/student1.jpeg';
import { useNavigate } from 'react-router-dom';

const StudentInfo = () => {
  const navigate = useNavigate();
  return (
    <div id="Studprofile">
    <div className="student-info-container">
      <div className="student-navbar">
        <div className="student-details">
          <h2 className="student-name">John Doe</h2>
          <p className="student-reg-no">Reg No: 123456789</p>
          <p className="student-reg-no">Seventh - A</p>
        </div>
        <img src={img} alt="Student" className="student-photo" />
      </div>
      <div className="home-button-container">
        <button className="home-button" onClick={() => navigate('/')}>
          <i className="fas fa-home"></i> Home
        </button>
      </div>
      <div className="cards-container">
        <div className="card3">
          <div className="box attendance">
            <div className="content">
              <i className="fas fa-calendar-check"></i>
              <h3>Attendance</h3>
              <p>Your attendance details.</p>
              <a href="#" onClick={() => navigate('/Studentprofile/Attendance')}>View Attendance</a>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="box timetable">
            <div className="content">
              <i className="fas fa-calendar-alt"></i>
              <h3>Time Table</h3>
              <p>Your class schedule.</p>
              <a href="#" onClick={() => navigate('/Studentprofile/TimeTable')}>View Time Table</a>
            </div>
          </div>
        </div>

        {/* <div className="card3">
          <div className="box profile">
            <div className="content">
              <i className="fas fa-user"></i>
              <h3>Profile</h3>
              <p>Your personal profile information.</p>
              <a href="#">View Profile</a>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  );
}

export default StudentInfo;