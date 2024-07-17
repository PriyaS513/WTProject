import React, { useState,useRef } from 'react';
// import './Teacprofile.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddAchivements() {
    const [errors, setErrors] = useState({});
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);

  // Validation For achivement
  const [data, setData] = useState({
    title:"",
    content:"",
    image:null,
  });

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
  
  const handleInputChangeAchivement = (event) =>{
    if(event.target.title === "image") {
      // If the input is an image, set the image property in formData
      setData({
        ...data,
        image: event.target.files[0], // Set the image file
      });
    } else {
      // For other inputs, update the formData as usual
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
    setErrors({});
  };

  const handleSubmitAchivement = async (event) => {
    event.preventDefault();
    const errors = ValidateAchivement(data);
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the data
      try {
        const formDataToSend = new FormData();
        // Append all form data to formDataToSend
        Object.keys(data).forEach((key) => {
          formDataToSend.append(key, data[key]);
        });

        const response = await axios.post(
          "http://localhost:8000/teacher/add_achievements/",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
            },
          }
        );
        console.log(response.data);
        // Reset the form data and errors
        resetFormAchivement();
      } catch (error) {
        if (error.response && error.response.status === 403) {
          console.error("Error adding achivement data: Forbidden");
        } else {
          console.error("Error adding achivement data:", error);
        }
      }
    } else {
      setErrors(errors);
    }
  };

  const ValidateAchivement = (data) => {
    const errors = {};
    if(!data.title)
    {
      errors.title = "Title is required";
    }
    if(!data.content)
    {
      errors.content = "Content is required";
    }
    return errors;
  };
    const boxSize = 80; 

  const resetFormAchivement = () => {
    setImage(null);
    setData({
      title:"",
      content:"",
      image:null,
    });
    setErrors({});
    fileInputRef.current.value = "";
  };
  const resetFormPhoto = () => {
    setImage(null); // reset the image state variable to null
    fileInputRef.current.value = null;
  };

      return (
        <div id="AddAchivements">
            <div className="achivement">
                            <h1>Add Achivements</h1>
                            <form onSubmit={handleSubmitAchivement} action='achivement' method='post' id=''>
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
                                        <label htmlFor='file-input' className="btn btn-outline-primary">
                                          Upload new photo
                                          <input type="file" className="account-settings-fileinput" id='file-input' name='image' onChange={handleInputChangePhoto} ref={fileInputRef} accept="image/*" aria-label="Upload new photo" required />
                                        </label>{' '}
                                        <button type="button" className="btn btn-default md-btn-flat" onClick={resetFormPhoto}>
                                          Reset
                                        </button>
                                        <div className="text-light small mt-1">
                                          Allowed JPG, GIF or PNG. Max size of 800K
                                        </div>
                                      </div>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="achivementTitle">Achivement Title</label>
                                        <input type="text" className="form-control" id="achivementTitle" name="title" placeholder="Enter Achivement title" value={data.title} onChange={handleInputChangeAchivement} required />
                                        {errors.title && (
                                                <p className="text-danger">{errors.title}</p>
                                         )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="achivementContent">Achivement Content</label>
                                        <textarea className="form-control" id="achivementContent" name='content' rows="5" placeholder="Enter Achivement content" value={data.content} onChange={handleInputChangeAchivement} required ></textarea>
                                        {errors.content && (
                                                <p className="text-danger">{errors.content}</p>
                                         )}
                                    </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                          </div>
        </div>
      )
}
export default AddAchivements;