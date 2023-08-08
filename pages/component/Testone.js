import React, { useState } from 'react'
import styles from '../../styles/Mainscreen.module.css'
import { FaUser } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'


const Testone = ({ onClick }) => {

  // const [isVisible, setIsVisible] = useState(true);
  // const handleClick = () => {
  //   setIsVisible(false);
  //   onClick();
  // };

  return (
    <>

      <div className={styles?.asidehead1} onClick={onClick}>
        <FaUser className={styles?.faicon} />
        <div>
          <div>
            <span className={`${styles?.userText} ms-3`}>Test One</span>
            <span className={`${styles?.activeText} ms-2`}>active</span>
          </div>
          <div className={`${styles?.nameText} ms-3`}>
            <p className={styles?.hiText}>hi</p>
            <BsDot
              style={{ color: "#CBD5E1", marginTop: -2 }}
              className="fs-4"
            />
            <p className={styles?.aboutText}>8 minutes</p>
          </div>
        </div>
      </div>


      {/* {isVisible && (
        <div className={styles?.botuser} onClick={handleClick}>
          <div className={styles?.asidehead1}  onClick={onClick}>
              <FaUser className={styles?.faicon} />
              <div>
                <div>
                  <span className={`${styles?.userText} ms-3`}>Test One</span>
                  <span className={`${styles?.activeText} ms-2`}>active</span>
                </div>
                <div className={`${styles?.nameText} ms-3`}>
                  <p className={styles?.hiText}>hi</p>
                  <BsDot
                    style={{ color: "#CBD5E1", marginTop: -2 }}
                    className="fs-4"
                  />
                  <p className={styles?.aboutText}>8 minutes</p>
                </div>
              </div>
            </div>
        </div>
      )} */}
    </>
  )
}

export default Testone