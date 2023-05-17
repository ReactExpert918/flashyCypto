"use client"
import { useState } from 'react';
import styles from './style.module.css';

const Navbar: React.FC<{}> = () => {
  const [close, setClose] = useState(false);
  return(
    <div className={styles["AppNavbar"]}>
      <a href='/'>
        <img className={styles['Logo']} alt="flashy logo" src="assets/svg/logo.svg" />
      </a>
      <div className={styles['AppNavbar_links']}>
        <a className={styles['AppNabnar_links_details']} href='/'>Home</a>
        <a className={styles['AppNabnar_links_details']} href='/'>Aboutus</a>
        <a className={styles['AppNabnar_links_details']} href='/'>Partners</a>
      </div>
      <button onClick={() => setClose(true)} className={styles['AppNavbar_hamburg']}>
        <img src='assets/svg/hamburg.svg' />
      </button>
      {
        close && (
          <div className={styles['AppNavbar_mobile_wrap']}>
            <div className={styles['AppNavbar_mobile']}>
              <div className={styles['AppNavbar_mobile_header']}>
                <img className={styles['Logo']} alt="flashy logo" src="assets/svg/logo.svg" />
                <img  onClick={() => setClose(false)} src="assets/svg/close.svg" />
              </div>
              <a className={styles['AppNavbar_mobile_links_details']} href='/'>Home</a>
              <a className={styles['AppNavbar_mobile_links_details']} href='/'>Aboutus</a>
              <a className={styles['AppNavbar_mobile_links_details']} href='/'>Partners</a>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Navbar;