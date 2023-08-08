import React,{ useState, useEffect } from 'react';
import styles from '../../styles/Navbar.module.css'

const Popup = ({ onClose }) => {

  const handleClickOutside = (event) => {
    if (!event.target.closest('.popup-content')) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>Popup Content</h2>
        <p>This is the content of the popup.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;