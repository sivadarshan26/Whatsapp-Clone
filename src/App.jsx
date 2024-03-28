import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/icons/menu_animated.json';
import random1 from './assets/images/random1.jpg';
import random2 from './assets/images/random2.png';
import random3 from './assets/images/random3.png';
import profile from './assets/images/profile.jpg';
import bg from './assets/images/bg.jpg'
import { IoSearch, IoFilter } from "react-icons/io5";
import { HiUserGroup, HiOutlineStatusOnline  } from "react-icons/hi";
import { GrChannel } from "react-icons/gr";
import { LuMessageSquarePlus } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { PiVideoCameraFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import Profilediv from './components/profilediv';


const ProfileComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsClicked(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsClicked(false);
    }
  };

  return (
    <div className='bg-gray-950 p-3 h-screen overflow-auto'>
      
      <div className="bg-gray-400 h-16 items-center flex  ">

        <div className="basis-1/3 h-full bg-custom2 flex justify-between items-center p-2 border-r border-gray-700">
        
          {/* ############################### profile image ###############################*/}  
          <div className="circular-image bg-purple-300 cursor-pointer " onClick={handleClick}>
            <img src={profile} alt="Profile" />
          </div>

          <div className='flex space-x-4 '>
          <HiUserGroup className='search-icon' size={21}/>
          <HiOutlineStatusOnline className='search-icon' size={25}/>
          <GrChannel className='search-icon' size={21}/>
          <LuMessageSquarePlus className='search-icon' size={23}/>
          <SlOptionsVertical className='search-icon' size={20}/>
          </div>

        </div>


        <div className='basis-2/3 h-full justify-between items-center bg-custom2 flex p-2 '>
          <div className="circular-image bg-purple-300 cursor-pointer " onClick={handleClick}>
            <img src={profile} alt="Profile" />
          </div>

          <div className='flex space-x-4 '>
            <div className='flex items-center'>
              <PiVideoCameraFill className='text-gray-700 ml-1 mr-1.5' size={24}/>
              <FaAngleDown  className='text-gray-700 ml-1' size={15}/>
            </div>
          <IoSearch className='search-icon ml-1' size={20}/>
          <SlOptionsVertical className='search-icon' size={20}/>
          </div>
        </div>
      </div>

      <div className='flex items-center bg-gray-300'>
      
      <div className="h-screen basis-1/3 pt-2 p-3 relative border-r overflow-y-auto border-gray-700 bg-custom3">
        
        <div className='flex'>
          
          <div className="flex p-2 bg-custom2 items-center h-10 rounded-lg w-full">
            <IoSearch className='search-icon ml-1' size={20} />   
            <input 
                type="text" 
                placeholder='Search or start new chat' 
                className='bg-transparent pl-3 outline-none border-none text-white w-full'
            />
          </div>
          <IoFilter className='search-icon ml-3 mt-1.5' size={25}/>
        </div>

        
        <Profilediv/>
        
      </div>
      


      <div class="max-h-screen w-2/3 bg-custom3 flex items-center justify-center overflow-y-auto">
        <img class="sticky max-h-screen w-full object-cover" src={bg} alt="bg" />
      </div>

      </div>

      {isClicked && (
        <div 
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75" 
          onClick={handleBackgroundClick}>
        
          <div 
            className="image2 bg-white rounded-md overflow-auto flex justify-center items-center" 
            style={{ width: '30vw', 
            height: '30vw', 
            overflow: 'hidden' }}>
            
            <img 
              src={profile} 
              alt="Profile"  
              className="object-cover h-full" />
          </div>
        </div>   
      )}
    </div>
  );
};

export default ProfileComponent;
