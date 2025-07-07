"use client"
import React from 'react';
import styles from '@/styles/HomeSectionThree.module.css';
import { useRouter } from 'next/navigation';


const HomeSectionThree = () => {

  const router = useRouter();


  return (
    <div className={styles.main_homeThree}>

      <div className={styles.homeThree_container}>

        <div className={styles.homeThree_left}>
          <h1 className={styles.homeThree_left_heading}>
            <p className={styles.homeThree_left_heading_p1}>Share your SyncTree</p>
            <p className={styles.homeThree_left_heading_p2}>from your Instagram,</p>
            <p className={styles.homeThree_left_heading_p3}>TikTok, Twitter and</p>
            <p className={styles.homeThree_left_heading_p4}>other bios</p>
          </h1>
          <div className={styles.homeThree_left_subheading}>Add your unique SyncTree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</div>
          <div className={styles.homeThree_left_btn}>
            <button type='button' onClick={() => router.push('/generate')}>Get started for free</button>
          </div>
        </div>

        <div className={styles.homeThree_right}>
          <div className={styles.homeThree_right_img_container}>
            <img src='/HomeSectionThree_Image1.png' className={styles.homeThree_image1} />
            <img src='/HomeSectionThree_Image2.png' className={styles.homeThree_image2} />
          </div>
        </div>

      </div>

    </div>
  )

}

export default HomeSectionThree
