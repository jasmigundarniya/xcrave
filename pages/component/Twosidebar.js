import React, { useState, useEffect } from 'react'
import Botuser from './Botuser'
import Testone from './Testone'
import Main from './main';
import Main1 from './main1';
import styles from '../../styles/Mainscreen.module.css'
import { IoIosAdd } from 'react-icons/io';


const Twosidebar = () => {

  const [clickedComponent, setClickedComponent] = useState(null);
  const [screenSize, setScreenSize] = useState(0);
  const [showChatscreen, setShowChatscreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemClick = (component) => {
    setClickedComponent(component);
    //  document.getElementById("mainsidebar").element.classList.add('d-none');
    // console.log('abc :>> ', a);
    // setShowChatscreen(false);
  };

  // const handleShowChatscreen = () => {
  //   setShowChatscreen(true);
  // };

  // useEffect(() => {
  //   if (screenSize <= 770) {
  //     setShowChatscreen(false);
  //   }
  // }, [screenSize]);


  

  return (
    <>
      {/* {!showChatscreen && screenSize <= 770 && clickedComponent === 'Botuser' && <Main />}
      {!showChatscreen && screenSize <= 770 && clickedComponent === 'Testone' && <Main1 />}

      {screenSize <= 770 && (
        <>
          <Botuser onClick={() => handleItemClick('Botuser')} />
          <Testone onClick={() => handleItemClick('Testone')} />
        </>
      )}

      {screenSize > 770 && <Twosidebar />} */}

      <Botuser onClick={() => handleItemClick('Botuser')} />
      <Testone onClick={() => handleItemClick('Testone')} />

      {screenSize <= 770 && clickedComponent === 'Botuser' && <Main />}
      {screenSize <= 770 && clickedComponent === 'Testone' && <Main1 />}


      {/* {clickedComponent === 'Botuser' && <Main  />}
      {clickedComponent === 'Testone' && <Main1  />} */}

    </>

  )
}

export default Twosidebar