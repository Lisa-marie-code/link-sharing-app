import React from "react";
import "./profile.css"
import { AiOutlinePicture, AiOutlinePlus } from "react-icons/ai";

export const Profile = () => {
  return (
    <div>
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>
      <div className="upload_pic">
        <p>Profile picture</p>
        <div className="image">
          <AiOutlinePicture />
          <AiOutlinePlus />Upload Image
        </div>
        <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
      </div>
    </div>
  );
};

export default Profile;
