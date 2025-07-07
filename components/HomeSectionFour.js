"use client"
import React from 'react';
import styles from '@/styles/HomeSectionFour.module.css';
import { useRouter } from 'next/navigation';


const HomeSectionFour = () => {

  const router = useRouter();

  
  return (
    <div className={styles.main_homeFour}>

      <div className={styles.homeFour_container}>

        <div className={styles.homeFour_left}>
          <div className={styles.homeFour_left_img_container}>
            <img src='/HomeSectionFour_Image1.png' className={styles.homeFour_image1} />
          </div>
        </div>

        <div className={styles.homeFour_right}>
          <h1 className={styles.homeFour_right_heading}>
            <p className={styles.homeFour_right_heading_p1}>Analyze your</p>
            <p className={styles.homeFour_right_heading_p2}>audience and keep</p>
            <p className={styles.homeFour_right_heading_p3}>your followers</p>
            <p className={styles.homeFour_right_heading_p4}>engaged</p>
          </h1>
          <div className={styles.homeFour_right_subheading}>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</div>
          <div className={styles.homeFour_right_btn}>
            <button type='button' onClick={() => router.push('/generate')}>Get started for free</button>
          </div>
        </div>

      </div>

    </div>
  )

}

export default HomeSectionFour
