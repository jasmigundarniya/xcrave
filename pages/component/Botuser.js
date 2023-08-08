import React, { useState } from 'react'
import styles from '../../styles/Mainscreen.module.css'
import { BsRobot} from 'react-icons/bs'

const Botuser = ({ onClick }) => {
  
  // const [isVisible, setIsVisible] = useState(true);
  // const handleClick = () => {
  //   setIsVisible(false);
  //   onClick();
  // };

  return (
    <>
    <div className={`${styles?.asidehead1} ${styles?.active}`}  onClick={onClick}>
              <BsRobot className={styles?.bsicon} />
              <span className={`${styles?.userText} ms-3 mt-2`}>Bot User</span>
            </div>

             {/* {isVisible && (
        <div className={styles?.botuser} onClick={handleClick}>
           <div className={`${styles?.asidehead1} ${styles?.active}`}  onClick={onClick}>
              <BsRobot className={styles?.bsicon} />
              <span className={`${styles?.userText} ms-3 mt-2`}>Bot User</span>
            </div>
        </div>
      )} */}
            </>
  )
}

export default Botuser