// Side.jsx
import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import profile from "../assets/images/profile.jpg";
import Profilediv from "../components/Profilediv";

const Side = () => {
  const [profileName, setProfileName] = useState("Dhanush Kumar");
  const [profileImage, setProfileImage] = useState(profile);

  const updateProfile = (newImage, newName) => {
    setProfileImage(newImage);
    setProfileName(newName);
  };

  return (
    <div className='h-screen'>
      <div className='h-16 bg-[#202c33] px-8 flex items-center'>
        <CgClose className='search-icon' size={25} />
        <p className='text-white text-lg ml-5'>Contact Info</p>
      </div>

      <div className='bg-[#030712] h-full'>
        <div id="top right" className='bg-[#111B21] h-auto p-10 mb-10 flex flex-col items-center justify-center'>
          <img className='rounded-full size-52' src={profileImage} alt="Profile" />
          <p className='text-white mt-6 text-xl'>{profileName}</p>
          <p className='search-icon mt-2'>+91 90009 90009</p>
          <Profilediv updateProfile={updateProfile} />
        </div>
      </div>
    </div>
  );
};

export default Side;
