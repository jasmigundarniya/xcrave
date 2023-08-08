import React, { useRef, useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import { BiRectangle } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import Image from 'next/image'
import Popup from './Popup'
// import { Button, Modal } from 'react-bootstrap';
import { Button, Popover, Typography } from "@mui/material";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiMoon } from "react-icons/hi";
import { CgLogOff } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPerson, BsUnlock } from "react-icons/bs";



const Navbar = () => {

  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };


  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


  return (
    <>
    
      {/* <div className={`${styles?.navbarmain} containers`}>
        <div className={`${styles?.navbar} `}>
          <div className={`${styles?.logo} `}>
            <Image src='/logo.png' alt='' width={200} height={35}/>
          </div>
          
          <div className={`${styles?.icons} `}>
           <span className={styles?.box}> <BiRectangle className={styles.rect} /></span>
            <BsFillPersonFill  onClick={togglePopup}  className={styles?.person} />
            {showPopup && (
              <div ref={popupRef}>
                <Popup onClose={closePopup} />
              </div>
            )}
          </div>
        </div>
      </div> */}


      <div className={`${styles?.navbarmain} containers`}>
        <div className={`${styles?.navbar} `}>
          <div className={`${styles?.logo} `}>
            <Image src='/logo.png' alt='' width={200} height={35} />
          </div>

          <div className={`${styles?.icons} `}>
            <span className={styles?.box}> <BiRectangle className={styles.rect} /></span>
            <BsFillPersonFill className={styles?.person} />

            {/* <Button variant="primary" onClick={handleShow}>
              Open Modal
            </Button>

            <Modal show={show} onHide={handleClose}
              dialogClassName="top-right-modal">
              <Modal.Header closeButton>
                <Modal.Title>Example Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>This is the content of the modal.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal> */}


            {/* <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Open Popover
            </Button>
            <Popover
              id={id}
              open={open}

              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              classes={{
                paper: styles?.customPopover // Apply the custom CSS class to the Popover component
              }}
            >

              <Typography classes={{
                paper: styles?.customPopover1 // Apply the custom CSS class to the Popover component
              }}>


                <div
                  className={styles.popup}
                >
                  <div className={styles.popupContent}>
                    <div className={`${styles?.dropItem} mt-0`}>
                      <div className="d-flex">
                        <Image
                          className={styles?.proImg}
                          src="/3.jpg"
                          alt=""
                          width={45}
                          height={45}
                        />
                        <div className="ms-3">
                          <div className="d-flex">
                            <h6 className={styles?.proText}>Marie George</h6>
                            <IoIosCheckmarkCircle className={styles?.ioIcon} />
                          </div>
                          <h6 className={styles?.proText1}>
                            Liked that disco music
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles?.dropItem1} mt-0`}>
                      <div className="d-flex">
                        <HiMoon className={styles?.moonIcon} />
                        <h6 className={`${styles?.moonText} ms-2`}>Darkmode</h6>
                      </div>
                      <div className="d-flex ms-4">
                        <div className="form-check">
                          <input
                            type="radio"
                            className={`${styles?.radioBtn} form-check-input`}
                            id="radio1"
                            name="optradio"
                            value="option1"
                          />
                          <span className={styles?.radioText}>On</span>
                          <label
                            className="form-check-label"
                            for="radio1"
                          ></label>
                        </div>
                        <div className="form-check ms-4">
                          <input
                            type="radio"
                            className={`${styles?.radioBtn} form-check-input`}
                            id="radio2"
                            name="optradio"
                            value="option2"
                          />
                          <span className={styles?.radioText}>Off</span>
                          <label
                            className="form-check-label"
                            for="radio2"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles?.dropItem2} mt-0`}>
                      <div className="d-flex mt-1">
                        <BsPerson className={styles?.proIcon} />
                        <span className={styles?.proDetail}>Profile</span>
                      </div>
                      <div className="d-flex mt-3 mb-3">
                        <AiOutlineSetting className={styles?.proIcon} />
                        <span className={styles?.proDetail}>Settings</span>
                      </div>
                      <div className="d-flex">
                        <BsUnlock className={styles?.proIcon} />
                        <span className={styles?.proDetail}>Change Password</span>
                      </div>
                    </div>
                    <div className={styles?.proLog}>
                      <CgLogOff className={styles?.proIcon} />
                      <span className={styles?.proDetail}>Log Out</span>
                    </div>
                  </div>
                </div>

              </Typography>
            </Popover> */}


          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

