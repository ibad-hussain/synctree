"use client"
import React from 'react';
import styles from '@/styles/HomeSectionTwo.module.css';
import { useRouter } from 'next/navigation';


const HomeSectionTwo = () => {

  const router = useRouter();


  return (
    <div className={styles.main_homeTwo}>

      <div className={styles.homeTwo_container}>

        <div className={styles.homeTwo_left}>
          <div className={styles.homeTwo_left_img_container}>
            <img src='/HomeSectionTwo_Image1.png' className={styles.homeTwo_image1} />
            <img src='/HomeSectionTwo_Image2.png' className={styles.homeTwo_image2} />
            <div className={styles.homeTwo_image3_container}>
              <img src='/HomeSectionOne_Image4.png' />
              <div className={styles.homeTwo_image3_container_span}>
                <img src='/SyncTree_Logo.png' />
                <span>/averyclothing</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.homeTwo_right}>
          <h1 className={styles.homeTwo_right_heading}>
            <p className={styles.homeTwo_right_heading_p1}>Create and customize</p>
            <p className={styles.homeTwo_right_heading_p2}>your SyncTree in</p>
            <p className={styles.homeTwo_right_heading_p3}>minutes</p>
          </h1>
          <div className={styles.homeTwo_right_subheading}>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</div>
          <div className={styles.homeTwo_right_btn}>
            <button type='button' onClick={() => router.push('/generate')}>Get started for free</button>
          </div>

        </div>

      </div>

    </div>
  )

}

export default HomeSectionTwo
