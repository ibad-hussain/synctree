"use client"
import React from 'react';
import styles from '@/styles/HomeSectionFive.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const HomeSectionFive = () => {

  const router = useRouter();

  const cardData = [
    { img: '/HomeSectionFive_Image1.jpeg', handle: 'leomessi', url: `${process.env.NEXT_PUBLIC_HOST}/leomessi` },
    { img: '/HomeSectionFive_Image2.jpeg', handle: 'viratkohli', url: `${process.env.NEXT_PUBLIC_HOST}/viratkohli` },
    { img: '/HomeSectionFive_Image3.jpeg', handle: 'natgeo', url: `${process.env.NEXT_PUBLIC_HOST}/natgeo` },
    { img: '/HomeSectionFive_Image4.jpeg', handle: 'neymarjr', url: `${process.env.NEXT_PUBLIC_HOST}/neymarjr` },
    { img: '/HomeSectionFive_Image5.jpg', handle: 'ipl', url: `${process.env.NEXT_PUBLIC_HOST}/ipl` },
    { img: '/HomeSectionFive_Image6.jpeg', handle: 'cristiano', url: `${process.env.NEXT_PUBLIC_HOST}/cristiano` },
    { img: '/HomeSectionFive_Image7.jpeg', handle: 'nasa', url: `${process.env.NEXT_PUBLIC_HOST}/nasa` },
    { img: '/HomeSectionFive_Image8.jpeg', handle: 'babarazam', url: `${process.env.NEXT_PUBLIC_HOST}/babarazam` },
    { img: '/HomeSectionFive_Image9.png', handle: 'youtube', url: `${process.env.NEXT_PUBLIC_HOST}/youtube` },
    { img: '/HomeSectionFive_Image10.jpeg', handle: 'smith49', url: `${process.env.NEXT_PUBLIC_HOST}/smith49` }
  ];


  return (
    <div className={styles.main_homeFive}>

      <div className={styles.homeFive_section1}>

        <h1 className={styles.homeFive_section1_heading}>
          The only link in bio trusted by 70M+
          <div className={styles.homeFive_section1_heading_flip}>
            <div><div>health educators</div></div>
            <div><div>streamers</div></div>
            <div><div>vloggers</div></div>
            <div><div>fitness coaches</div></div>
            <div><div>ecommerce sellers</div></div>
            <div><div>retailers</div></div>
            <div><div>products</div></div>
            <div><div>wellness leaders</div></div>
            <div><div>musicians</div></div>
            <div><div>bands</div></div>
            <div><div>podcasters</div></div>
            <div><div>fashion designers</div></div>
            <div><div>culture creators</div></div>
            <div><div>merch sellers</div></div>
            <div><div>writers</div></div>
            <div><div>DJs</div></div>
            <div><div>creators</div></div>
            <div><div>influencers</div></div>
            <div><div>small businesses</div></div>
            <div><div>athletes</div></div>
            <div><div>models</div></div>
            <div><div>monetizers</div></div>
            <div><div>health educators</div></div>
            <div><div>streamers</div></div>
            <div><div>vloggers</div></div>
            <div><div>fitness coaches</div></div>
            <div><div>ecommerce sellers</div></div>
            <div><div>retailers</div></div>
            <div><div>products</div></div>
            <div><div>wellness leaders</div></div>
            <div><div>musicians</div></div>
            <div><div>bands</div></div>
            <div><div>podcasters</div></div>
            <div><div>fashion designers</div></div>
            <div><div>culture creators</div></div>
            <div><div>merch sellers</div></div>
            <div><div>writers</div></div>
            <div><div>DJs</div></div>
            <div><div>creators</div></div>
            <div><div>influencers</div></div>
            <div><div>small businesses</div></div>
            <div><div>athletes</div></div>
            <div><div>models</div></div>
            <div><div>monetizers</div></div>
            <div><div>health educators</div></div>
            <div><div>streamers</div></div>
            <div><div>vloggers</div></div>
            <div><div>fitness coaches</div></div>
            <div><div>ecommerce sellers</div></div>
            <div><div>retailers</div></div>
            <div><div>products</div></div>
            <div><div>wellness leaders</div></div>
            <div><div>musicians</div></div>
            <div><div>bands</div></div>
            <div><div>podcasters</div></div>
            <div><div>fashion designers</div></div>
            <div><div>culture creators</div></div>
            <div><div>merch sellers</div></div>
            <div><div>writers</div></div>
            <div><div>DJs</div></div>
            <div><div>creators</div></div>
            <div><div>influencers</div></div>
            <div><div>small businesses</div></div>
            <div><div>athletes</div></div>
            <div><div>models</div></div>
            <div><div>monetizers</div></div>
          </div>
        </h1>

        <div className={styles.homeFive_section1_primary_card_container}>
          <div className={styles.homeFive_section1_secondary_card_container}>
            {/* One */}
            {cardData.map((card, index) => (
              <Link key={index} href={card.url} target='_blank' className={styles.homeFive_section1_card}>
                <p className={styles.homeFive_section1_card_img}>
                  <img src={card.img} alt={card.handle} />
                </p>
                <p className={styles.homeFive_section1_card_p}>@{card.handle}</p>
              </Link>
            ))}
            {/* Two */}
            {cardData.map((card, index) => (
              <Link key={`dup-${index}`} href={card.url} target='_blank' className={styles.homeFive_section1_card}>
                <p className={styles.homeFive_section1_card_img}>
                  <img src={card.img} alt={card.handle} />
                </p>
                <p className={styles.homeFive_section1_card_p}>@{card.handle}</p>
              </Link>
            ))}
            {/* Three */}
            {cardData.map((card, index) => (
              <Link key={`dup-${index}`} href={card.url} target='_blank' className={styles.homeFive_section1_card}>
                <p className={styles.homeFive_section1_card_img}>
                  <img src={card.img} alt={card.handle} />
                </p>
                <p className={styles.homeFive_section1_card_p}>@{card.handle}</p>
              </Link>
            ))}
            {/* Four */}
            {cardData.map((card, index) => (
              <Link key={`dup-${index}`} href={card.url} target='_blank' className={styles.homeFive_section1_card}>
                <p className={styles.homeFive_section1_card_img}>
                  <img src={card.img} alt={card.handle} />
                </p>
                <p className={styles.homeFive_section1_card_p}>@{card.handle}</p>
              </Link>
            ))}
            {/* Five */}
            {cardData.map((card, index) => (
              <Link key={`dup-${index}`} href={card.url} target='_blank' className={styles.homeFive_section1_card}>
                <p className={styles.homeFive_section1_card_img}>
                  <img src={card.img} alt={card.handle} />
                </p>
                <p className={styles.homeFive_section1_card_p}>@{card.handle}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.homeFive_section2}>

        <div className={styles.homeFive_section2_left}>
          <div className={styles.homeFive_section2_left_container1} onClick={() => router.push('/templates')}>
            <img src='/HomeSectionFive_Image11.png' />
            <span>Share your content in limitless ways on your SyncTree.</span>
          </div>
          <div className={styles.homeFive_section2_left_container2} onClick={() => router.push('/products')}>
            <img src='/HomeSectionFive_Image12.png' />
            <span>Sell products and collect payments. It’s monetization made simple.</span>
          </div>
        </div>
        <div className={styles.homeFive_section2_right}>
          <div className={styles.homeFive_section2_right_container1} onClick={() => router.push('/pricing')}>
            <img src='/HomeSectionFive_Image13.png' />
            <span>Grow, own and engage your audience by unifying them in one place.</span>
          </div>
        </div>

      </div>

      <div className={styles.homeFive_section3}>

        <h1 className={styles.homeFive_section3_heading}>
          <p className={styles.homeFive_section3_heading_p1}>The fast, friendly and</p>
          <p className={styles.homeFive_section3_heading_p2}>powerful link in bio tool.</p>
        </h1>
        <div className={styles.homeFive_section3_btn}>
          <button type='button' onClick={() => router.push('/pricing')}>Explore all plans</button>
        </div>

      </div>

      <div className={styles.homeFive_section4}>

        <h1 className={styles.homeFive_section4_heading}>
          As featured in...
        </h1>
        <div className={styles.homeFive_section4_img_container1}>
          <div className={styles.homeFive_section4_img_card}>
            <img src='/HomeSectionFive_Image14.png' />
          </div>
          <div className={styles.homeFive_section4_img_card}>
            <img src='/HomeSectionFive_Image15.png' />
          </div>
          <div className={styles.homeFive_section4_img_card}>
            <img src='/HomeSectionFive_Image16.png' />
          </div>
        </div>
        <div className={styles.homeFive_section4_img_container2}>
          <div className={styles.homeFive_section4_img_card}>
            <img src='/HomeSectionFive_Image17.png' />
          </div>
          <div className={styles.homeFive_section4_img_card}>
            <img src='/HomeSectionFive_Image18.png' />
          </div>
        </div>

      </div>

      <div className={styles.homeFive_section5}>

        <div className={styles.homeFive_section5_img_container}>
          <img src='/HomeSectionFive_Image19.png' />
        </div>
        <h1 className={styles.homeFive_section5_heading}>
          <p className={styles.homeFive_section5_heading_p1}>“SyncTree simplifies the process for</p>
          <p className={styles.homeFive_section5_heading_p2}>creators to share multiple parts of</p>
          <p className={styles.homeFive_section5_heading_p3}>themselves in one inclusive link.”</p>
        </h1>
        <div className={styles.homeFive_section5_subheading}>
          <p className={styles.homeFive_section5_subheading_p1}>Riley Lemon,</p>
          <p className={styles.homeFive_section5_subheading_p2}>YouTube, Content Creator</p>
        </div>

      </div>

    </div>
  )
  
}

export default HomeSectionFive
