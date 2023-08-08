import React from 'react'
import styles from "../../styles/Userchat.module.css";
import { BsRobot } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Userchat = ({ name, onClick }) => {

    return (
        <>
            <div className={styles?.usermain}>
                <div className='mt-1 d-flex align-items-center'>
                    <div className={`${styles?.lefticonmain}`}><AiOutlineArrowLeft className={`${styles?.lefticon}`} /></div>
                    <BsRobot className={styles?.bsicon} />
                    <span className={`${styles?.userText} ms-3`}>{name}</span>
                </div>
                <span onClick={onClick} className={styles?.bsiconmain}><BsRobot  className={styles?.bsicon1} /></span>
            </div>
        </>
    )
}

export default Userchat