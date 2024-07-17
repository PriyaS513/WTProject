
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Studentprofile = () => {
  return(               
                        <div id="displayStudTT">
                            <div className="container-fluid">
                                    <h2>Time Table</h2>
                                    <div className="table-responsive">
                                    <table className="table time-table">
                                        <thead>
                                            <tr>
                                                <th>Day</th>
                                                <th>9:30-10:20</th>
                                                <th>10:20-11:10</th>
                                                <th>11:10-12:00</th>
                                                <th>12:00-12:40</th>
                                                <th>12:40-1:30</th>
                                                <th>1:30-2:20</th>
                                                <th>2:20-3:10</th>
                                                <th>3:10-4:00</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="highlight"><b>Monday</b></td>
                                                <td>English</td>
                                                <td>Math</td>
                                                <td>Chemistry</td>
                                                <td rowSpan="6" className="special"><b>LUNCH</b></td>
                                                <td colSpan="3" className="special">LAB</td>
                                                <td>Physics</td>
                                            </tr>
                                            <tr>
                                                <td className="highlight"><b>Tuesday</b></td>
                                                <td colSpan="3" className="special">LAB</td>
                                                <td>English</td>
                                                <td>Chemistry</td>
                                                <td>Math</td>
                                                <td className="special">SPORTS</td>
                                            </tr>
                                            <tr>
                                                <td className="highlight"><b>Wednesday</b></td>
                                                <td>Math</td>
                                                <td>Physics</td>
                                                <td>English</td>
                                                <td>Chemistry</td>
                                                <td colSpan="3">LIBRARY</td>
                                            </tr>
                                            <tr>
                                                <td className="highlight"><b>Thursday</b></td>
                                                <td>Physics</td>
                                                <td>English</td>
                                                <td>Chemistry</td>
                                                <td colSpan="3" className="special">LAB</td>
                                                <td>Math</td>
                                            </tr>
                                            <tr>
                                                <td className="highlight"><b>Friday</b></td>
                                                <td colSpan="3" className="special">LAB</td>
                                                <td>Math</td>
                                                <td>Chemistry</td>
                                                <td>English</td>
                                                <td>Physics</td>
                                            </tr>
                                            <tr>
                                                <td className="highlight"><b>Saturday</b></td>
                                                <td>English</td>
                                                <td>Chemistry</td>
                                                <td>Math</td>
                                                <td colSpan="3">SEMINAR</td>
                                                <td className="special">SPORTS</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

  );
};

export default Studentprofile;