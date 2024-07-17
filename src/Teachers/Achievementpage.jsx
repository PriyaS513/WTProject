import React from 'react';
import '../Components/Studprofile.css';
import img from '../Images/student1.jpeg';
import { useNavigate } from 'react-router-dom';

const StudentInfo = () => {
  const navigate = useNavigate();
  return (
    <div id='Achivementpage'>
    <div className="Achivementpage">
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
          <button className="home-button" onClick={() => navigate('/Teacprofile')}>
            <i className="fas fa-home"></i> Home
          </button>
        </div>
        <div className="cards-container">
          <div className="card3">
            <div className="box add-notice">
              <div className="content">
                <i className="fas fa-bullhorn"></i>
                <h3>Add Achivements</h3>
                <p>Add a new notice.</p>
                <a href="#" onClick={() => navigate('/AddAchivements')}>Add Achivements</a>
              </div>
            </div>
          </div>

          <div className="card3">
            <div className="box list-notice">
              <div className="content">
                <i className="fas fa-list-alt"></i>
                <h3>List of Achivement</h3>
                <p>View the list of all notices.</p>
                <a href="#" onClick={() => navigate('/AchivementsList')}>View List</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default StudentInfo;