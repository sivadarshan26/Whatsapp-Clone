// App.js

import React, { useState, useEffect } from 'react';
import profile from './assets/images/42780.jpg';
import bg from './assets/images/bg.jpg';
import { IoSearch, IoFilter } from "react-icons/io5";
import { HiUserGroup, HiOutlineStatusOnline } from "react-icons/hi";
import { GrChannel } from "react-icons/gr";
import { LuMessageSquarePlus } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { PiVideoCameraFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Profilediv from './components/Profilediv';
import Side from './components/Side';
import Chat from './components/Chat';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import { IoStar } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { PiTimer } from "react-icons/pi";
import Switch from '@mui/material/Switch';
import { IoMdLock } from "react-icons/io";
import { BiBlock } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidTrashAlt } from "react-icons/bi";




const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);
  const [isDivOpen, setIsDivOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(profile);
  const [profileName, setProfileName] = useState('Profile Name');
  const [mainProfileImage, setMainProfileImage] = useState(profile);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleClick = (event) => {
    setIsClicked(!isClicked);
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsClicked(false);
    }
  };

  const open = Boolean(anchorEl);

  const menuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event) => {
    setIsClicked(!isClicked);
    setAnchorEl(event.currentTarget);
    setFilterClicked(true);
    handleClose();
  };

  const updateProfileInfo = (newImage, name) => {
    setProfileImage(newImage);
    setProfileName(name);
  };

  const handleSideClick = () => {
    setIsDivOpen(!isDivOpen);
    // const newName = isDivOpen ? 'Profile Name' : 'New Profile Name';
    // setProfileName(newName);
  };

  const VideoDiv = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='bg-gray-950 flex p-3 max-h-full overflow-hidden'>

      <div className='grow'>
        <div className='bg-gray-950  h-auto overflow-auto'>

          <div className="bg-gray-400 h-16 items-center flex  ">

            <div className="basis-1/3 h-full bg-custom2 flex justify-between items-center p-2 border-r border-gray-700">

              <div id='a' className="circular-image bg-purple-300 cursor-pointer " onClick={handleClick}>
                <img src={mainProfileImage} alt="Profile" />
              </div>

              <div className='flex space-x-4 '>
                <HiUserGroup className='search-icon' size={21} />
                <HiOutlineStatusOnline className='search-icon' size={25} />
                <GrChannel className='search-icon' size={21} />
                <LuMessageSquarePlus className='search-icon' size={23} />

                <Button
                  id="demo-positioned-button"
                  sx={{
                    width: '4px',
                    p: 0,
                    marginLeft: '-10px',
                    marginRight: '-10px',
                  }}
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={menuClick}
                >
                  <SlOptionsVertical className='search-icon p-0 m-0' size={20} />
                </Button>


                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',

                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  PaperProps={{
                    style: {
                      backgroundColor: 'rgb(33, 46, 56)',
                    },
                  }}
                >
                  <MenuItem onClick={handleMenuItemClick} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>New Group</MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 100 }}>New Community</MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 100 }}>Archived</MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 100 }}>Starred Messages</MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 100 }}>Select Chats</MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 100 }}>Settings</MenuItem>
                  <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 100 }}>Logout</MenuItem>
                  <MenuItem onClick={() => window.open('https://www.whatsapp.com/download', '_blank')} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 100 }}>Get WhatsApp For Windows</MenuItem>
                </Menu>

              </div>

            </div>

            <div className='grow h-full justify-between items-center bg-custom2 flex p-2 '>
              <div id='top right' className='flex items-center' >
                <div className="circular-image bg-purple-300 cursor-pointer " onClick={handleSideClick}>
                  <img src={profileImage} alt="Profile" />
                </div>
                <p className='text-white text-xl ml-2 cursor-pointer' onClick={handleSideClick}>{profileName}</p>
              </div>

              <div className='flex space-x-4 items-center'>
                <div className='flex items-center border border-gray-700 rounded-full px-2 py-1' onClick={VideoDiv}>
                  <PiVideoCameraFill className='text-gray-700 ml-1 mr-1.5' size={24} />
                  <FaAngleDown className='text-gray-700 ml-1' size={15} />
                </div>
                <IoSearch className='search-icon ml-1' size={20} />
                <SlOptionsVertical className='search-icon' size={20} />
                {/* {isExpanded && (
              <div className='flex bg-gray-600 absolute z-50 p-5 mt-32 right-64 space-x-4 rounded-md'>
                <div>
                <p className='text-white text-xl'>Make calls with the Windows app</p>
                <p className='search-icon'>Download WhatsApp for Windows to strat making calls.</p>
                </div>
                <div className='ml-4 flex items-center '>
                  <p className='bg-green-500 px-4 py-2 rounded-full'>Get the app</p>
                </div>

              </div>
            )} */}

              </div>
              
            </div>
            
          </div>

          <div className='parent flex items-center bg-gray-300'>

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
                <div className='m-0 p-0'>
                  <ToggleButton
                    value="check"
                    style={{ marginLeft: 0, padding: 0 }}
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                      setFilterClicked(!filterClicked)
                    }}
                  >
                    {!filterClicked &&
                      <div className='p-1.5 ml-2 rounded-full'>
                        <IoFilter className='search-icon  ' size={25} />
                      </div>
                    }

                    {filterClicked &&
                      <div className='p-1.5 ml-2 bg-green-500 rounded-full'>
                        <IoFilter className=' text-white rounded-full  ' size={25} />
                      </div>
                    }

                  </ToggleButton>
                </div>

              </div>

              {filterClicked &&
                <div className='h-20 ml-3 mr-10 items-center border-b custom-border flex'>
                  <p className='text-green-500 text-lg self-center'>Filtered by Unread</p>
                </div>
              }
              <Profilediv updateProfileImage={updateProfileInfo} profileImage={profileImage} />

            </div>


            <div className="child max-h-screen overflow-y-auto grow bg-custom3 items-center justify-center ">
              <Chat />
            </div>

          </div>

          {isClicked && (
            <div id="full view"
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75"
              onClick={handleBackgroundClick}>

              <div
                className="image2 bg-white rounded-md overflow-auto flex justify-center items-center"
                style={{
                  width: '30vw',
                  height: '30vw',
                  overflow: 'hidden'
                }}>
                <img
                  src={profile}
                  alt="Profile"
                  className="object-cover h-full" />
              </div>
            </div>
          )}

        </div>
      </div>

      {isDivOpen &&

        <div className='sticky   bg-gray-400 w-1/3 border-l border-gray-700'>

          <div className='h-16 bg-[#202c33] px-8 flex items-center'>
            <CgClose className='search-icon cursor-pointer' size={22} onClick={handleSideClick}/>
            <p className='text-white text-lg ml-5'>Contact Info</p>
          </div>
          {/* ******sideclick********* */}
          <div className='bg-[#030712] max-h-screen overflow-y-auto'>
            <div id="side" className='bg-[#111B21] p-10 mb-2 flex flex-col items-center justify-center'>
              <img className='rounded-full size-52' src={profileImage} alt="Profile" />
              <p className='text-white mt-6 text-xl'>{profileName}</p>
              <p className='search-icon mt-2'>+91 90009 90009</p>
            </div>
            <div className='bg-[#202c33] px-8 py-4 mb-2 flex flex-col'>
              <p className='search-icon '>About</p>
              <p className='text-white'>Go to war against the man in the mirror & don't come back until you win!</p>
            </div>
            <div className='bg-[#202c33] pl-8 py-4 pr-4 flex flex-col'>
              <div className='flex justify-between'>
                <p className='search-icon '>Media, links and docs</p>
                <div className='flex items-center'>
                  <p className='search-icon mr-2'>5</p>
                  <LiaGreaterThanSolid className='search-icon cursor-pointer' size={15} />
                </div>
              </div>

              <div className='flex'>
                <div className='bg-yellow-500 size-20 mt-4 mr-4 rounded-md hover:bg-gradient-to-b from-yellow-500 to-black  cursor-pointer'></div>
                <div className='bg-green-500 size-20 mt-4 rounded-md hover:hover:bg-gradient-to-b from-green-500 to-black  cursor-pointer'></div>
              </div>
            </div>
            {/* starred messages */}
            <div className='mt-2 bg-[#202c33] pl-8 py-4 pr-4 flex flex-col space-y-4'>
              <div className='flex justify-between'>
                <div className='items-center flex'>
                  <IoStar className='search-icon' size={15} />
                  <p className='text-white ml-2'>Starred Messages</p>
                </div>
                <div className='flex items-center'>
                  <LiaGreaterThanSolid className='search-icon cursor-pointer' size={15} />
                </div>
              </div>

              <div className='flex justify-between'>
                <div className='items-center flex'>
                  <FaBell className='search-icon' size={15} />
                  <p className='text-white ml-2'>Mute Notifications</p>
                </div>
                <div className='flex items-center'>
                  <Switch className="checked:bg-blue-500" />
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex'>
                  <PiTimer className='search-icon mt-1.5' size={15} />
                  <div className='ml-2' >
                  <p className='text-white'>Disapperaing Messages</p>
                  <p className='search-icon text-xs'>Off</p>
                  </div>
                </div>
                <div className='mt-1.5'>
                  <LiaGreaterThanSolid className='search-icon cursor-pointer' size={15} />
                </div>
              </div>

              <div className='flex justify-between'>
                <div className=' flex'>
                  <IoMdLock className='search-icon mt-1.5' size={18} />
                  <div className='ml-1' >
                    <p className='text-white'>Encryption</p>
                    <p className='search-icon text-xs'>Messages are end-toendencrypted. Click to verify.</p>
                  </div>
                </div>
                <div className='flex mt-1.5 '>
                  <LiaGreaterThanSolid className='search-icon cursor-pointer' size={15} />
                </div>
              </div>
              
            </div>
          
          <div className='mt-2 bg-[#202c33] pl-8 py-4 pr-4 flex flex-col space-y-4'>
            <div className='flex items-center cursor-pointer'>
              <BiBlock className='text-red-400' size={15} style={{ transform: 'scaleX(-1)' }} />
              <p className='text-red-400 ml-2'> Block</p>
            </div>
            <div className='flex items-center cursor-pointer'>
              <BiSolidDislike className='text-red-400' size={15}/>
              <p className='text-red-400 ml-2'> Report</p>
            </div>
            <div className='flex items-center cursor-pointer'>
              <BiSolidTrashAlt className='text-red-400 mt-10' size={15}/>
              <p className='text-red-400 ml-2 mt-10'> Delete Chat</p>
            </div>
          </div>
          
          </div>
          

        </div>
      }

      
      
    </div>
  );
};

export default App;
