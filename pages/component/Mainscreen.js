import React from 'react'
import styles from '../../styles/Mainscreen.module.css'
import Chatscreen from './Chatscreen'
import Messagescreen from './Messagescreen'

const Mainscreen = () => {
    return (
            <div className='containers'>
                <div className={`${styles?.responsive} m-0 row`}>
                    <div id = "mainsidebar" className={`${styles?.sidebar} col-lg-2  col-md-12 col-sm-12`} >
                        <Chatscreen />
                    </div>
                    <div  className={`${styles?.Messagescreenmain} p-0 col-lg-10  col-md-12 col-sm-12`}  >
                        <Messagescreen />
                    </div>
                </div>
            </div>
    )
}

export default Mainscreen