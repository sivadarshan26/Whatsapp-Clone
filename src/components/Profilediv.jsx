import { useState, useEffect } from 'react';
import random1 from '../assets/images/random1.jpg';
import random2 from '../assets/images/random2.png';
import random3 from '../assets/images/random3.png';

const profiledata = [
  { name: 'Harish Kumar', profile: random1 },
  { name: 'Dhanush Kumar', profile: random2 },
  { name: 'Rathish', profile: random3 }
];

const Profilediv = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clickedProfile, setClickedProfile] = useState(null);

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

  const handleClick = (profile) => {
    setClickedProfile(profile);
    setIsClicked(true);
  };

  const handleBackgroundClick = () => {
    setIsClicked(false);
  };

  return (
    <div>
      {profiledata.map((item, index) => (
        <div className='flex pt-4 items-center' key={index}>
          <img
            className='w-12 h-12 rounded-full'
            src={item.profile}
            alt="Profile"
            onClick={() => handleClick(item.profile)}
          />
          <div className='ml-3 mr-10 pb-2 w-full flex flex-col border-b custom-border'>
            <p className='text-white text-xl'>{item.name}</p>
            <p className='search-icon'>Last / Recent Texts</p>
          </div>
        </div>
      ))}

      {isClicked && (
        <div
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
              src={clickedProfile}
              alt="Profile"
              className="object-cover h-full"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Profilediv;
