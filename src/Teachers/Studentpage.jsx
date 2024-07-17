import React from 'react';
import '../Components/Studprofile.css';
import img from '../Images/student1.jpeg';
import { useNavigate } from 'react-router-dom';

const StudentInfo = () => {
  const navigate = useNavigate();
  return (
    <div id="Studentpage">
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
        <button className="home-button" onClick={() => navigate('/Teacherprofile')}>
          <i className="fas fa-home"></i> Home
        </button>
      </div>
      <div className="cards-container">
        <div className="card3">
          <div className="box attendance">
            <div className="content">
              <i className="fas fa-calendar-check"></i>
              <h3>Add Student</h3>
              <p>Add attendance details.</p>
              <a href="" onClick={() => navigate('/Teacherprofile/Studentpage/AddStudent')}  >Add Student</a>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="box timetable">
            <div className="content">
              <i className="fas fa-calendar-alt"></i>
              <h3>List of Student</h3>
              <p>List of Student</p>
              <a href="" onClick={() => navigate('/Teacherprofile/Studentpage/StudentList')}>View List</a>
            </div>
          </div>
        </div>

      </div>  
      </div>
    </div>
  );
}

export default StudentInfo;