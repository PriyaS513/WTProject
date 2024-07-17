import React from 'react';
import './Teacprofile.css';
import img from '../Images/student1.jpeg';
import { useNavigate } from 'react-router-dom';

const StudentInfo = () => {
  const navigate = useNavigate();
  return (
    <div id = "Teacprofile">
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
          <div className="box add-student">
            <div className="content">
              <i className="fas fa-user-plus"></i>
              <h3> Student</h3>
              <p>Add a new student to the system.</p>
              <a href="" onClick={() => navigate('/Teacherprofile/Studentpage')}>Add Student</a>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="box add-notice">
            <div className="content">
              <i className="fas fa-bullhorn"></i>
              <h3>Add Notice</h3>
              <p>Create and publish a new notice.</p>
              <a href="" onClick={() => navigate('/Teacherprofile/Noticepage')}>Add Notice</a>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="box add-timetable">
            <div className="content">
              <i className="fas fa-calendar-alt"></i>
              <h3>Add Time Table</h3>
              <p>Set up a new class schedule.</p>
              <a href=""  onClick={() => navigate('/Teacherprofile/TimeTablepage')}>Add Time Table</a>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="box add-achievement">
            <div className="content">
              <i className="fas fa-trophy"></i>
              <h3>Add Achievement</h3>
              <p>Record a new student achievement.</p>
              <a href="" onClick={() => navigate('/Achivementpage')}>Add Achievement</a>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="box add-attendance">
            <div className="content">
              <i className="fas fa-check-circle"></i>
              <h3>Add Attendance</h3>
              <p>Mark or update student attendance.</p>
              <a href=""onClick={() => navigate('/Attendancepage')}>Add Attendance</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default StudentInfo;