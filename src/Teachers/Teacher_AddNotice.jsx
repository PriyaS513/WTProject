import React, { useState,useRef } from 'react';
// import './Teacprofile.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddNotice() {
    
  const [errors, setErrors] = useState({});

     // Validation for Notice
  const [form, setForm] = useState({
    noticeTitle: "",
    noticeContent: "",
    noticeDate: "",
  });
  
  const handleInputChangeNotice = (event) => {
    
    // For other inputs, update the formData as usual
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  
    setErrors({});
  };
  const handleFormSubmit = async(event) => {
    
    event.preventDefault();
    const errors = validateNotice(form);
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the data
      try {
        const formDataToSend = new FormData();
        // Append all form data to formDataToSend
        Object.keys(form).forEach((key) => {
          formDataToSend.append(key, form[key]);
        });

        const response = await axios.post(
          "http://localhost:8000/teacher/add_notice/",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
            },
          }
        );
        console.log(response.data);
        // Reset the form data and errors
        resetFormNotice();
      } catch (err) {
        if (err.response && err.response.status === 403) {
          console.error("Error adding notice data: Forbidden");
        } else {
          console.error("Error adding notice data:", err);
        }
      }
    } else {
      setErrors(errors);
    }
  };
  const validateNotice = (form) => {
    const errors = {};
    if (!form.noticeTitle) {
      errors.noticeTitle = "Title is required";
    }
    if (!form.noticeContent) {
      errors.noticeContent = "Content is required";
    }
    if (!form.noticeDate) {
      errors.noticeDate = "Date is required";
    }
    return errors;
  };
 
  const resetFormNotice = () => {
    // Reset the form data and errors
    setForm({
      noticeTitle: "",
    noticeContent: "",
    noticeDate: "",
    });
    setErrors({});
 
  };

  return (
    <div id="add_notice">
        <div className="container">
                                <h2 className="text-center mb-4">Add Notices</h2>
                                <form onSubmit={handleFormSubmit} action="notice" method="post" id="form-notice">
                                    <div className="form-group">
                                        <label htmlFor="title-input">Notice Title</label>
                                        <input type="text" className="form-control" id="title-input" name='noticeTitle' placeholder="Enter notice title" value={form.noticeTitle} onChange={handleInputChangeNotice} />
                                        {errors.noticeTitle && (
                                          <p className="text-danger">{errors.noticeTitle}</p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="content-input">Notice Content</label>
                                        <textarea className="form-control" id="content-input" name='noticeContent' rows="5" placeholder="Enter notice content" value={form.noticeContent} onChange={handleInputChangeNotice} ></textarea>
                                        {errors.noticeContent && (
                                          <p className="text-danger">{errors.noticeContent}</p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date-input">Date</label>
                                        <input type="date" className="form-control" max={new Date().toISOString().split('T')[0]} id="date-input" name="noticeDate" value={form.noticeDate} onChange={handleInputChangeNotice} />
                                        {errors.noticeDate && (
                                          <p className="text-danger">{errors.noticeDate}</p>
                                        )}
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                </form>
                            </div>
    </div>
  );
}
export default AddNotice;