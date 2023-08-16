import React, { useRef, useState } from "react";
import "./profile.css";
import { Save } from "../Save/save";
import { AiOutlinePicture, AiOutlinePlus } from "react-icons/ai";

export const Profile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    console.log(file);
    setImage(file);
  };

  return (
    <div>
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>
      <div className="upload_pic">
        <p className="profile-text">Profile picture</p>
        <div className="image" onClick={handleImageClick}>
          <AiOutlinePicture className="picture" />
          <AiOutlinePlus className="plus" />
          Upload Image
          {image ? <img src={URL.createObjectURL(image)} alt=""/> : image}
          <input
            type="file"
            onChange={handleImageChange}
            ref={inputRef}
            style={{ display: "none" }}
          />
        </div>
        <p className="caution">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
      <div className="formCover">
        <div className="form-group">
          <label for="first-name">First Name*</label>
          <input id="first-name" name="first-name" placeholder="e.g. John" />
        </div>
        <div className="form-group">
          <label for="first-name">Last Name*</label>
          <input
            id="first-name"
            name="first-name"
            placeholder="e.g. Appleseed"
          />
        </div>
        <div className="form-group">
          <label for="first-name">Email</label>
          <input
            id="first-name"
            name="first-name"
            placeholder="e.g. email@example.com"
          />
        </div>
      </div>
      <hr></hr>
      <Save />
    </div>
  );
};

export default Profile;
