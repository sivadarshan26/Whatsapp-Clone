import { useState, useEffect } from 'react';
import profile from './assets/images/profile.jpg';
import bg from './assets/images/bg.jpg'
import { IoSearch, IoFilter } from "react-icons/io5";
import { HiUserGroup, HiOutlineStatusOnline } from "react-icons/hi";
import { GrChannel } from "react-icons/gr";
import { LuMessageSquarePlus } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { PiVideoCameraFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import Profilediv from './components/profilediv';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';


const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);
 
  useEffect(() => { const handleEscKey = (event) => {
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

  return (
    <div className='bg-gray-950 p-3 h-full overflow-auto'>
      
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

          <Button
            id="demo-positioned-button"
            sx={{
              width:'4px',
              p:0,
              marginLeft:'-10px',
              marginRight:'-10px',
            }}
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={menuClick}
          >
            <SlOptionsVertical className='search-icon p-0 m-0' size={20}/>
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
            <MenuItem onClick={handleMenuItemClick}  style={{ color: 'rgba(255, 255, 255, 0.7)' }}>New Group</MenuItem>
            <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight:100  }}>New Community</MenuItem>
            <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight:100  }}>Archived</MenuItem>
            <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight:100  }}>Starred Messages</MenuItem>
            <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight:100  }}>Select Chats</MenuItem>
            <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight:100  }}>Settings</MenuItem>
            <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight:100 }}>Logout</MenuItem>
            <MenuItem onClick={handleClose} style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight:100  }}>Get WhatsApp For Windows</MenuItem>
          </Menu>
          
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
          <Profilediv/>
          
          </div>
          


          <div className="max-h-screen w-2/3 bg-custom3 flex items-center justify-center overflow-y-auto">
          <img className="sticky max-h-screen w-full object-cover" src={bg} alt="bg" />
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

export default App;
