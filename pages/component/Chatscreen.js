import React from 'react'
import styles from '../../styles/Mainscreen.module.css'
import { IoIosAdd } from 'react-icons/io'

import Twosidebar from './Twosidebar'

const Chatscreen = () => {

    return (
        <>
        <div  className={styles?.hidesidebar}>
            <div className={styles?.asidehead}>
                <span className={styles?.chattext}>Chats</span>
                <div className="d-flex">
                    <IoIosAdd />
                    <span className={styles?.newText}>New</span>
                </div>
            </div>

            <Twosidebar className={styles.chaterespon}/>
            </div>
        </>
    )
}

export default Chatscreen