import React from "react";
import Home from "./Components/Home.jsx";
import StudentLogin from "./Components/StudentLogin.jsx"
import StudentPortal from "./Components/StudentPortal.jsx";
import TeacherLogin from "./Teachers/TeacherLogin.jsx";

import PrincipalPortal from "./Principal/PrincipalPortal.jsx";
import ForgotPassword from "./Components/ForgotPassword.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attendance from "./Components/Attendancedisplay.jsx";
import Studentpage from "./Teachers/Studentpagedisplay.jsx"
import Noticepage from "./Teachers/Noticepagedisplay.jsx";
import Achivementpage from "./Teachers/Achivementpagedisplay.jsx";
import TimeTablepage from "./Teachers/TimeTablepagedisplay.jsx";
import Attendancepage from "./Teachers/Attendancepagedisplay.jsx";
import Teacprofile from "./Teachers/Teacprofiledisplay.jsx";
import AddStud from "./Teachers/AddStudentdisplay.jsx";
import StudentList from "./Teachers/Studentlistdisplay.jsx";
import DisplayNotice from "./Teachers/Addnoticedisplay.jsx"
import NoticeList from "./Teachers/NoticeListdisplay.jsx";
import SelfTT from "./Teachers/Create_Self_TT.jsx";
import StudTT from "./Teachers/Create_Stud_TT.jsx";
import AddAchivements from "./Teachers/AddAchivements.jsx";
import ListAchievement from "./Teachers/DisplayAchievementList.jsx"
import MarkAttendance from "./Teachers/MarkAttendence.jsx";
import StudentTT from "./Components/TimeTable.jsx";
import TeacherTT from "./Teachers/TimeTableTeacher.jsx";
import AddTeacher from "./Principal/AddTeacher.jsx";
import TeacherList from "./Principal/DisplayTeachersList.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/notice" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/achivement" element={<Home />} />
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/Studentprofile" element={<StudentPortal />} />
        <Route path="/teacher" element={<TeacherLogin />} />
        
        <Route path="/Principalprofile" element={<PrincipalPortal />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/Studentprofile/Attendance" element={<Attendance/>}/>
        <Route path="/Teacherprofile/Studentpage" element={<Studentpage/>}/>
        <Route path="/Teacherprofile/Noticepage" element={<Noticepage/>}/>
        <Route path="/Achivementpage" element={<Achivementpage/>}/>
        <Route path="/Teacherprofile/TimeTablepage" element={<TimeTablepage/>}/>
        <Route path="/Attendancepage" element={<Attendancepage/>}/>
        <Route path="/Teacherprofile" element={<Teacprofile/>}/>
        <Route path="/Studentprofile/TimeTable" element={<StudentTT/>}/>
        <Route path="/Teacherprofile/Studentpage/StudentList" element={<StudentList/>}/>
        <Route path="/Teacherprofile/Noticepage/Addnotice" element={<DisplayNotice/>}/>
        <Route path="/Teacherprofile/Noticepage/Listnotice" element={<NoticeList/>}/>
        <Route path="/Teacherprofile/TimeTablepage/CreateTeacherTimeTable" element={<SelfTT/>}/>
        <Route path="/Teacherprofile/TimeTablepage/CreateStudentTimeTable" element={<StudTT/>}/>
        <Route path="/AddAchivements" element={<AddAchivements/>}/>
        <Route path="/AchivementsList" element={<ListAchievement/>}/>
        <Route path="/MarkAttendance" element={<MarkAttendance/>}/>
        <Route path="/Teacherprofile/Studentpage/AddStudent" element={<AddStud/>}/>
        <Route path="/Teacherprofile/TimeTablepage/TimeTable" element={<TeacherTT/>}/>
        <Route path="/Principalprofile/Addteacher" element={<AddTeacher/>}/>
        <Route path="/Principalprofile/TeacherList" element={<TeacherList/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;