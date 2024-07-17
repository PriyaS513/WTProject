import React, { useState,useRef } from 'react';
import './Teacprofile.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function StudentTimeTable() {
    const saveTable = () => {
        const tableData = [];
        const rows = document.querySelectorAll('#timetable tr');
    
        for (let i = 1; i < rows.length; i++) {
          const rowData = [];
          const cells = rows[i].querySelectorAll('td');
    
          for (let j = 1; j < cells.length; j++) {
            rowData.push(cells[j].innerText);
          }
    
          tableData.push(rowData);
        }
    
        console.log(tableData);
        alert('Table data saved successfully!');
      };
    
      const clearTable = () => {
        const cells = document.querySelectorAll('#timetable td[contentEditable="true"]');
    
        cells.forEach((cell) => {
          cell.innerText = '';
        });
      };

      return (
        <div id="StudTT">
            <div className="container-fluid">
                            <h1>Create Students TIME TABLE</h1>
                            <div className="table-responsive">
                            <table id="timetable">
                              <thead>
                                <tr>
                                    <th>Day/Period</th>
                                    <th contentEditable="true" suppressContentEditableWarning>I<br />9:30-10:20</th>
                                    <th contentEditable="true" suppressContentEditableWarning>II<br />10:20-11:10</th>
                                    <th contentEditable="true" suppressContentEditableWarning>III<br />11:10-12:00</th>
                                    <th contentEditable="true" suppressContentEditableWarning>12:00-12:40</th>
                                    <th contentEditable="true" suppressContentEditableWarning>IV<br />12:40-1:30</th>
                                    <th contentEditable="true" suppressContentEditableWarning>V<br />1:30-2:20</th>
                                    <th contentEditable="true" suppressContentEditableWarning>VI<br />2:20-3:10</th>
                                    <th contentEditable="true" suppressContentEditableWarning>VII<br />3:10-4:00</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="highlight"><b>Monday</b></td>
                                    <td contentEditable="true" suppressContentEditableWarning>Eng</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Mat</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Che</td>
                                    <td rowSpan="6" className="special" contentEditable="true" suppressContentEditableWarning><b>LUNCH</b></td>
                                    <td contentEditable="true" suppressContentEditableWarning>LAB</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                </tr>
                                <tr>
                                    <td className="highlight"><b>Tuesday</b></td>
                                    <td contentEditable="true" suppressContentEditableWarning>LAB</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Eng</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Che</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Mat</td>
                                    <td contentEditable="true" suppressContentEditableWarning>SPORTS</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                </tr>
                                <tr>
                                    <td className="highlight"><b>Wednesday</b></td>
                                    <td contentEditable="true" suppressContentEditableWarning>Mat</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Eng</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Che</td>
                                    <td contentEditable="true" suppressContentEditableWarning>LIBRARY</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                </tr>
                                <tr>
                                    <td className="highlight"><b>Thursday</b></td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Eng</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Che</td>
                                    <td contentEditable="true" suppressContentEditableWarning>LAB</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Mat</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                </tr>
                                <tr>
                                    <td className="highlight"><b>Friday</b></td>
                                    <td className="special" contentEditable="true" suppressContentEditableWarning>LAB</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Mat</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Che</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Eng</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                </tr>
                                <tr>
                                    <td className="highlight"><b>Saturday</b></td>
                                    <td contentEditable="true" suppressContentEditableWarning>Eng</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Che</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Mat</td>
                                    <td contentEditable="true" suppressContentEditableWarning>SEMINAR</td>
                                    <td contentEditable="true" suppressContentEditableWarning>SPORTS</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                    <td contentEditable="true" suppressContentEditableWarning>Phy</td>
                                </tr>
                                </tbody>
                                </table>
                                <div className="btn-container">
                                    <button onClick={saveTable}>Save</button>
                                    <button onClick={clearTable}>Clear</button>
                                </div>
                                
                            
                        </div>
                        </div>
        </div>
      )
}
export default StudentTimeTable;