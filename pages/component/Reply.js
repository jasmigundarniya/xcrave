import React from "react";
import styles from "../../styles/Replym.module.css";
const Reply = () => {
  return (
    <>
      <div className={styles?.Replymess}>
        <h5 className={styles?.Replytxt}>
          Something is wrong with api, if you are admin please check the logs 
        </h5>
      </div>
    </>
  );
};

export default Reply;
