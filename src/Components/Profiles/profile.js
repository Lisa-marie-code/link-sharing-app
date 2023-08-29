import React, { useRef, useState } from "react";
import "./profile.css";
import upload from "../../images/uploadImg.png";
import { Save } from "../Save/save";


export const Profile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };

  return (
    <div>
     
  
        <div >
          <h1>Profile Details</h1>
          <p>Add your details to create a personal touch to your profile.</p>
          <div className="upload_pic">
            <p className="profile-text">Profile picture</p>
            <div className="image-container" onClick={handleImageClick}>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Profile"
                  className="img-after"
                />
              ) : (
                <img src={upload} alt="uploadImg" />
              )}
              <input
                type="file"
                onChange={handleImageChange}
                ref={inputRef}
                style={{ display: "none" }}
              />
            </div>
            <div className="hover-text">Change image</div>
            <p className="caution">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
          <div className="formCover">
            <div className="form-group">
              <label htmlFor="first-name">First Name*</label>
              <input
                id="first-name"
                name="first-name"
                placeholder="e.g. John"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name*</label>
              <input
                id="last-name"
                name="last-name"
                placeholder="e.g. Appleseed"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="e.g. email@example.com"
              />
            </div>
          </div>
          <hr></hr>
        </div>
   
      <Save />
    </div>
  );
};

export default Profile;
