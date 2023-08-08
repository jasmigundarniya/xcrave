import React from 'react'
import styles from "../../styles/Main.module.css";
import Reply from "./Reply";
import Send from "./Send";
import { BsSendFill } from 'react-icons/bs'

const Messagesbox = () => {
  return (
    <>
      <div className={styles?.Main}>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>
        <div className={styles?.Sendmain}>
          <Send />
        </div>
        <div className={styles?.Replymain}>
          <Reply />
        </div>


        
      </div>

      <div className={`${styles?.inputmain}  row m-0 p-0`}>
                <div className={`${styles?.inputfield} col-11 `}>
                    <input type='text' placeholder='Type your message...' />
                </div>

                <div className={`${styles?.sendbtn} col-1`}>
                    <span className={styles?.rightsendbtn} ><BsSendFill className={styles?.iconSend} /></span>
                </div>
            </div>
    </>
  )
}

export default Messagesbox