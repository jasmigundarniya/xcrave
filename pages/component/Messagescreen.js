import React, { useEffect, useState } from 'react'
import Main from './main'
import styles from "../../styles/Mainscreen.module.css";
import Userchat from './Userchat';

const Messagescreen = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [widthPercentage, setWidthPercentage] = useState(100);

  const handleClick = () => { 
    setIsClicked(!isClicked);
    if (isClicked) {
      setWidthPercentage(100);
    } else {
      setWidthPercentage(76);
    }
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth === 820) {
        setWidthPercentage(100);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>

      <div className={`${styles.messagescreen}`} style={{ width: `${widthPercentage}%` }}>
        <div className={`${styles.content} ${isClicked ? styles.overlay : ''}`}>
          <Userchat name={"Bot User"} onClick={handleClick} />
          <Main />
        </div>
      </div>

    </>
  )
}

export default Messagescreen