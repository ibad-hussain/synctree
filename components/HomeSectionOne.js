"use client"
import React from 'react';
import styles from '@/styles/HomeSectionOne.module.css';
import { useRouter } from 'next/navigation';


const HomeSectionOne = () => {

  const router = useRouter();


  return (
    <div className={styles.main_homeOne}>

      <div className={styles.homeOne_container}>

        <div className={styles.homeOne_left}>
          <h1 className={styles.homeOne_left_heading}>
            <p className={styles.homeOne_left_heading_p1}>Everything you</p>
            <p className={styles.homeOne_left_heading_p2}>are. In one,</p>
            <p className={styles.homeOne_left_heading_p3}>simple link in</p>
            <p className={styles.homeOne_left_heading_p4}>bio.</p>
          </h1>
          <div className={styles.homeOne_left_subheading}>Join 70M+ people using SynTree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</div>
          <div className={styles.homeOne_left_btns}>
            <input type='text' placeholder='synctree/' />
            <button type='button' onClick={() => router.push('/generate')}>Claim your SyncTree</button>
          </div>
        </div>

        <div className={styles.homeOne_right}>
          <div className={styles.homeOne_right_img_container}>
            <img src='/HomeSectionOne_Image1.png' className={styles.homeOne_image1} />
            <img src='/HomeSectionOne_Image2.png' className={styles.homeOne_image2} />
            <img src='/HomeSectionOne_Image3.png' className={styles.homeOne_image3} />
            <img src='/HomeSectionOne_Image4.png' className={styles.homeOne_image4} />
            <img src='/HomeSectionOne_Image5.png' className={styles.homeOne_image5} />
            <img src='/HomeSectionOne_Image6.png' className={styles.homeOne_image6} />
            <img src='/HomeSectionOne_Image7.png' className={styles.homeOne_image7} />
            <p className={styles.homeOne_right_img_p1}>Autumn Collection</p>
            <p className={styles.homeOne_right_img_p2}>Latest Additions</p>
            <p className={styles.homeOne_right_img_p3}>Podcast</p>
          </div>
        </div>

      </div>

    </div>
  )

}

export default HomeSectionOne
