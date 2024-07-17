import React from "react";
import "../Teachers/Teacprofile.css";
import img from "../Images/student1.jpeg";
import { useNavigate } from "react-router-dom";

const StudentInfo = () => {
  const navigate = useNavigate();
  return (
    <div id="Teacprofile">
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
          <button className="home-button" onClick={() => navigate("/")}>
            <i className="fas fa-home"></i> Home
          </button>
        </div>

        <div className="cards-container">
          <div className="card3">
            <div className="box add-teacher">
              <div className="content">
                <i className="fas fa-chalkboard-teacher"></i>
                <h3>Add Teacher</h3>
                <p>Add a new teacher to the system.</p>
                <a href="" onClick={() => navigate('/Principalprofile/Addteacher')}>
                  Add Teacher
                </a>
              </div>
            </div>
          </div>

          <div className="card3">
            <div className="box list-teacher">
              <div className="content">
                <i className="fas fa-users"></i>
                <h3>List of Teacher</h3>
                <p>View the list of all teachers.</p>
                <a href="" onClick={() => navigate('/Principalprofile/TeacherList')}>
                  View List
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;