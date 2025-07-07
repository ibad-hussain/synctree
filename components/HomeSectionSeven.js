'use client'
import React from 'react';
import styles from '@/styles/HomeSectionSeven.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const HomeSectionSeven = () => {

  const router = useRouter();


  return (
    <div className={styles.main_homeSeven}>

      <img src='/HomeSectionSeven_Image1.png' className={styles.homeSeven_image1} />
      <img src='/HomeSectionSeven_Image2.png' className={styles.homeSeven_image2} />

      <div className={styles.main_homeSeven_top}>
        <div className={styles.main_homeSeven_top_heading}>
          <p className={styles.main_homeSeven_top_heading_p1}>Jumpstart your corner of the</p>
          <p className={styles.main_homeSeven_top_heading_p2}>internet today</p>
        </div>
        <div className={styles.main_homeSeven_top_btns}>
          <div>
            <input type='text' placeholder='synctree/' />
            <button type='button' onClick={() => router.push('/generate')}>Claim your SyncTree</button>
          </div>
        </div>
      </div>

      <div className={styles.main_homeSeven_middle}>
        <div className={styles.main_homeSeven_middle_container1}>
          <div className={styles.main_homeSeven_middle_container1_links}>
            <div className={styles.main_homeSeven_middle_container1_links_heading}>Company</div>
            <div className={styles.main_homeSeven_middle_container1_links_links}>
              <Link href={'/'}>The SyncTree Blog</Link>
              <Link href={'/'}>Engineering Blog</Link>
              <Link href={'/'}>Marketplace</Link>
              <Link href={'/'}>What's New</Link>
              <Link href={'/'}>About</Link>
              <Link href={'/'}>Press</Link>
              <Link href={'/'}>Careers</Link>
              <Link href={'/'}>Link in Bio</Link>
              <Link href={'/'}>Social Good</Link>
              <Link href={'/'}>Contact</Link>
            </div>
          </div>
          <div className={styles.main_homeSeven_middle_container1_links}>
            <div className={styles.main_homeSeven_middle_container1_links_heading}>Community</div>
            <div className={styles.main_homeSeven_middle_container1_links_links}>
              <Link href={'/'}>SyncTree for Enterprise</Link>
              <Link href={'/'}>2023 Creator Report</Link>
              <Link href={'/'}>2022 Creator Report</Link>
              <Link href={'/'}>Charities</Link>
              <Link href={'/'}>What's Trending</Link>
              <Link href={'/'}>Creator Profile Directory</Link>
              <Link href={'/'}>Explore Templates</Link>
            </div>
          </div>
          <div className={styles.main_homeSeven_middle_container1_links}>
            <div className={styles.main_homeSeven_middle_container1_links_heading}>Support</div>
            <div className={styles.main_homeSeven_middle_container1_links_links}>
              <Link href={'/'}>Help Topics</Link>
              <Link href={'/'}>Getting Started</Link>
              <Link href={'/'}>SyncTree Pro</Link>
              <Link href={'/'}>Features & How-Tos</Link>
              <Link href={'/'}>FAQs</Link>
              <Link href={'/'}>Report a Violation</Link>
            </div>
          </div>
          <div className={styles.main_homeSeven_middle_container1_links}>
            <div className={styles.main_homeSeven_middle_container1_links_heading}>Trust & Legal</div>
            <div className={styles.main_homeSeven_middle_container1_links_links}>
              <Link href={'/'}>Terms & Conditions</Link>
              <Link href={'/'}>Privacy Notice</Link>
              <Link href={'/'}>Cookie Notice</Link>
              <Link href={'/'}>Trust Center</Link>
              <Link href={'/'}>Cookie Preferences</Link>
              <Link href={'/'}>Transparency Report</Link>
              <Link href={'/'}>Law Enforcement Access Policy</Link>
            </div>
          </div>
        </div>
        <div className={styles.main_homeSeven_middle_container2}>
          <div className={styles.main_homeSeven_middle_container2_btns}>
            <button type='button' onClick={() => router.push('/generate')} className={styles.homeSeven_login}>Log in</button>
            <button type='button' onClick={() => router.push('/generate')} className={styles.homeSeven_getstarted}>Get started for free</button>
          </div>
          <div className={styles.main_homeSeven_middle_container2_links}>
            <Link href={'/'}>
              <div>
                <p className={styles.link1_p1}>Download on the</p>
                <p className={styles.link1_p2}>App Store</p>
              </div>
            </Link>
            <Link href={'/'}>
              <div>
                <p className={styles.link1_p1}>GET IT ON</p>
                <p className={styles.link1_p2}>Google Play</p>
              </div>
            </Link>
            <Link href={'/'}><img src='/HomeSectionSeven_Image5.png' /></Link>
            <Link href={'/'}><img src='/HomeSectionSeven_Image6.png' /></Link>
            <Link href={'/'}><img src='/HomeSectionSeven_Image7.png' /></Link>
            <Link href={'/'}><img src='/HomeSectionSeven_Image8.png' /></Link>
          </div>
        </div>
      </div>

      <div className={styles.main_homeSeven_bottom}>
        <div className={styles.main_homeSeven_bottom_imgs}>
          <img src='/HomeSectionSeven_Image3.png' />
          <img src='/HomeSectionSeven_Image4.png' />
        </div>
        <div className={styles.main_homeSeven_bottom_text}>
          We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. SyncTree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066
        </div>
      </div>

    </div>
  )

}

export default HomeSectionSeven
