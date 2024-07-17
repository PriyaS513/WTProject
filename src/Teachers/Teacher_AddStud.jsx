import React, { useState,useRef } from 'react';
// import './Teacprofile.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";

function AddStudent() {

        const [image, setImage] = useState(null);

        const[inputValue, setInputValue] = useState({
            mobile:"",
            studentId:"",
        });

        //download 
        const download = () => {
            const svg = document.getElementById("QRCode");
            const svgData = new XMLSerializer().serializeToString(svg);
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const pngFile = canvas.toDataURL("image/png");
                const downloadLink = document.createElement("a");
    
                //name of image
                downloadLink.download = `${inputValue}`;
                downloadLink.href = `${pngFile}`;
                downloadLink.click();
            };
            img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
        };
       
        //  Validation for adding Student

        const [StudformData, setStudFormData] = useState({
            name: "",
            sclass: "",
            regid: "",
            rollNo: "",
            add: "",
            father:"",
            mother:"",
            mobno:"",
            passw:"",
            confirmPass:"",
            image: null,
            qrcode:""
        });

        const [errors, setErrors] = useState({});

        const handleInputChangePhoto = (event) => {
            const file = event.target.files[0];
            const fileType = file.type;
            const fileSize = file.size;

            if (!['image/jpeg', 'image/gif', 'image/png'].includes(fileType)) {
                alert('Only JPG, GIF and PNG files are allowed');
                return;
              }
            
              if (fileSize > 819200) {
                alert('File size exceeds 800KB');
                return;
              }

            const reader = new FileReader();
            reader.onload = () => {
              setImage(reader.result);
            };
            reader.readAsDataURL(file);
          };

        const handleInputChange = (event) => {
            if (event.target.name === "image") {
                // If the input is an image, set the image property in formData
                setStudFormData({
                ...StudformData,
                image: event.target.files[0], // Set the image file
                });
            } else {
                // For other inputs, update the formData as usual
                setStudFormData({
                ...StudformData,
                [event.target.name]: event.target.value,
                });
            }
            setErrors({});
        };

        const handleSubmit = async(event) => {
            event.preventDefault();
            const errors = validateForm(StudformData);
            if (Object.keys(errors).length === 0) {
                // Form is valid, submit the data
                try {
                    const formDataToSend = new FormData();
                    // Append all form data to formDataToSend
                    Object.keys(StudformData).forEach((key) => {
                        formDataToSend.append(key, StudformData[key]);
                    });
                    const response = await axios.post(
                        "http://localhost:8000/teacher/add_student/",
                        formDataToSend,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
                            },
                        }
                    );
                    console.log(response.data);
                    // Reset the form data and errors
                    resetForm();
                } catch (error) {
                    if (error.response && error.response.status === 403) {
                        console.error("Error adding student data: Forbidden");
                    } else {
                        console.error("Error adding student data:", error);
                    }
                }
            } else {
                setErrors(errors);
            }
        };

        const validateForm = (StudformData) => {
        const errors = {};
        if (!StudformData.name) {
            errors.name = "Name is required";
        }
        if (!StudformData.sclass) {
            errors.sclass = "Class is required";
        } else if (!/^[1-9]$|^10$/.test(StudformData.sclass)) {
        errors.sclass = "Class should be a number between 1 to 10";
        }
        if(!StudformData.regid){
            errors.regid = "ID is required";
        }

        if (!StudformData.mobno){
            errors.mobno = "Mobile number is required";
        } else if (!/^\d{10}$/.test(StudformData.mobno)) {
            errors.mobno = "Mobile number is invalid";
        }

        if (!StudformData.rollNo) {
            errors.rollNo = "Roll number is required";
        } else if (!/^\d+$/.test(StudformData.rollNo)) {
            errors.rollNo = "Roll number should have numbers only";
        }

        if (!StudformData.add) {
            errors.add = "Address is required";
        }

        if (!StudformData.father) {
            errors.father = "Father Name is required";
        }

        if (!StudformData.mother) {
            errors.mother = "Mother Name is required";
        }
        if (!StudformData.passw.trim()){
            errors.passw = "Password is required";
        }
        else if(StudformData.passw.length < 8)
        {
            errors.passw = "password should be at least 8 char"
        }
        if(!StudformData.confirmPass.trim()){
            errors.confirmPass = "Confirm Password is required";
        }
        else if(StudformData.confirmPass!=StudformData.passw)
        {
            errors.confirmPass = "Password and Confirm Password should be same";
        }

        return errors;
            
    
    };

        const fileInputRef = useRef(null);
        const boxSize = 80; 

        const resetForm = () => {
            setImage(null);
        // Reset the form data and errors
            setStudFormData({
                name: "",
                sclass: "",
                regid: "",
                rollNo: "",
                add: "",
                father:"",
                mother:"",
                mobno:"",
                passw:"",
                confirmPass:"",
                image: null,
                qrcode: "",
            });
            setErrors({});
            fileInputRef.current.value = "";
        };

        const resetFormPhoto = () => {
            setImage(null); // reset the image state variable to null
            fileInputRef.current.value = null;
          };
    return (
        <div id = "Addstud">
        
            <h2>Add Student details</h2>
            <form onSubmit={handleSubmit} action="student" method="post" id="student-form">
               <div className="card-body media align-items-center">
        <img
          src={image || "https://bootdey.com/img/Content/avatar/avatar1.png"}
          alt="photo"
          className="d-block ui-w-80"
          style={{
            width: `${boxSize}px`,
            height: `${boxSize}px`,
            objectFit: 'cover',
            borderRadius: '50%',
      }}
        />
        <div className="media-body ml-4">
          <label htmlFor="file-input" className="btn btn-outline-primary">
            Upload new photo
            <input type="file" className="account-settings-fileinput" id='file-input' name='image' onChange={handleInputChangePhoto} ref={fileInputRef} accept="image/*" aria-label="Upload new photo" required 
            />
          </label>{" "}
          <button type="button" className="btn btn-default md-btn-flat" onClick={resetFormPhoto}>
            Reset
          </button>
          <div className="text-light small mt-1">
            Allowed JPG, GIF or PNG. Max size of 800K
          </div>
        </div>
      </div> 
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor="name-input" className="form-label">Name</label> */}
                                    <input type="text" className="form-control mb-1" id='name-input' name="name" required value={StudformData.name} onChange={handleInputChange} placeholder='Enter Name' />
                                    {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor='class-input' className="form-label">Class</label> */}
                                    <input type="text" className="form-control" id='class-input' name="sclass" required value={StudformData.sclass} onChange={handleInputChange} placeholder='Enter Class' />
                                    {errors.sclass && <div style={{ color: "red" }}>{errors.sclass}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor='id-input' className="form-label">Registration ID</label> */}
                                    <input type="text" className="form-control mb-1" id='id-input' name="regid" required value={StudformData.regid} onChange={handleInputChange} placeholder='Enter Registration ID' />
                                    {errors.regid && <div style={{ color: "red" }}>{errors.regid}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor='roll-input' className="form-label">Roll No</label> */}
                                    <input type="text" className="form-control mb-1" id='roll-input' name="rollNo" required value={StudformData.rollNo} onChange={handleInputChange} placeholder='Enter Roll No' />
                                    {errors.rollNo && <div style={{ color: "red" }}>{errors.rollNo}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor='add-input' className="form-label">Address</label> */}
                                    <input type="text" className="form-control" id='add-input' name="add" required value={StudformData.add} onChange={handleInputChange} placeholder='Enter Address' />
                                    {errors.add && <div style={{ color: "red" }}>{errors.add}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor='father-input' className="form-label">Father's Name</label> */}
                                    <input type="text"className="form-control mb-1" id='father-input' name="father" required value={StudformData.father} onChange={handleInputChange}  placeholder="Enter Father's Name" />
                                    {errors.father && <div style={{ color: "red" }}>{errors.father}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor='mother-input' className="form-label">Mother's Name</label> */}
                                    <input type="text" className="form-control mb-1" id='mother-input' name="mother" required value={StudformData.mother} onChange={handleInputChange} placeholder="Enter Mother's Name" />
                                    {errors.mother && <div style={{ color: "red" }}>{errors.mother}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor='mobile-input' className="form-label">Mobile No</label> */}
                                    <input type="tel"className="form-control mb-1" id='mobile-input' name="mobno" required value={StudformData.mobno} onChange={handleInputChange} placeholder='Enter Mobile No' />
                                    {errors.mobno && <div style={{ color: "red" }}>{errors.mobno}</div>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor="pass-input" className="form-label">Enter Password</label> */}
                                    <input type="password" className="form-control mb-1" id="pass-input" name="passw" required value={StudformData.passw} onChange={handleInputChange} placeholder="Enter Password" />
                                    {errors.passw && <div style={{ color: "red" }}>{errors.passw}</div>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label htmlFor="confirm-input" className="form-label">Confirm Password</label> */}
                                    <input type="password" className="form-control mb-1" id='confirm-input' name="confirmPass" required value={StudformData.confirmPass} onChange={handleInputChange} placeholder="Confirm Password" />
                                    {errors.confirmPass && <div style={{ color: "red" }}>{errors.confirmPass}</div>}
                                </div>
                                <input
                                        type="text"
                                        placeholder="Enter Mobile Number and Student ID"
                                        onChange={(e) =>
                                            setInputValue(e.target.value)
                                        }
                                    />
                                <input type="button" onClick={download} value="Download"></input>
                        </div>
                        
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="gen">
                                        <h1>Generate QR Code</h1>
                                            <div style={{height: "auto", margin: "0 auto", maxWidth: 64, width: "100%"}}>
                                                <QRCode 
                                                size={256}
                                                style={{height: "auto", maxwidth: "100%", width: "100%"}}
                                                value={inputValue}
                                                viewBox={`0 0 256 256`}
                                                id="QRCode"
                                                />
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6" >
                                <div className="save">
                                    <button type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                    <button type="button" className="btn btn-default" onClick={resetForm}>
                                        Cancel
                                    </button>
                                </div>      
                            </div>
                            </div>
                        </div>
            </form>
    </div>
);
}

export default AddStudent;