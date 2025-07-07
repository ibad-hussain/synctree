"use client"
import React from 'react';
import styles from '@/styles/About.module.css';
import HomeSectionSeven from "@/components/HomeSectionSeven";
import Image from "next/image";
import Link from 'next/link';


const About = () => {

    return (
        <>

            <div className={styles.main_about}>

                <div className={styles.about_container}>

                    <div className={styles.about_top}></div>

                    <div className={styles.about_bottom}>
                        <div className={styles.about_bottom_img}>
                            <Image alt='Developer Picture' src={'/About_Pic.jpeg'} width={150} height={150} />
                        </div>
                        <div className={styles.about_bottom_heading}>Ibad Hussain</div>
                        <div className={styles.about_bottom_subheading}>Full Stack Developer</div>
                        <div className={styles.about_bottom_follow_container}>
                            <div className={styles.about_bottom_follow_text}>Follow</div>
                            <div className={styles.about_bottom_follow_links}>
                                <Link href={'https://www.linkedin.com/in/ibadhussain/'} target='_blank'><Image alt='Linkedin Logo' src={'/Linkedin_Icon.png'} width={30} height={30} /></Link>
                                <Link href={'https://github.com/ibad-hussain/'} target='_blank'><Image alt='Github Logo' src={'/Github_Icon.png'} width={30} height={30} /></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <HomeSectionSeven />

        </>
    )
    
}

export default About
