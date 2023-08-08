import React from 'react'
import { BsSendFill } from 'react-icons/bs'
import styles from "../../styles/Userchat.module.css";


const Inputmessage = () => {
    return (
        <>

            <div className={`${styles?.inputmain}  row m-0 p-0`}>
                <div className={`${styles?.inputfield} col-11 `}>
                    <input type='text' placeholder='Type your message...' />
                </div>

                <div className={`${styles?.sendbtn} col-1`}>
                    <span  className={styles?.rightsendbtn}  ><BsSendFill className={styles?.iconSend} /></span>
                </div>
            </div>
        </>
    )
}

export default Inputmessage