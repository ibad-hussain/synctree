'use client'
import { useState } from 'react';
import styles from '@/styles/HomeSectionSix.module.css';


const faqData = [
  {
    question: 'Why do I need a link in bio tool?',
    answer: (
      <>
        Right now, every time you&rsquo;ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It&rsquo;s time-consuming and complicated – making it so much harder to keep everything up to date.
        <br /><br />
        A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you&rsquo;ve got a change, you only ever have to make it once.
      </>
    )
  },
  {
    question: 'Is SyncTree the original link in bio tool?',
    answer: (
      <>
        The short answer? Yes!
        <br /><br />
        Back in 2016, we created SyncTree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. SyncTree remains the leading, biggest and most popular link-in-bio solution – but that&rsquo;s just the beginning. You can use your SyncTree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don&rsquo;t have a website, that&rsquo;s fine. If you have a SyncTree, you don&rsquo;t need one!
      </>
    )
  },
  {
    question: 'Can you get paid and sell things from a SyncTree?',
    answer: (
      <>
        Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your SyncTree.
        <br /><br />
        A lot of SyncTree creators see incredible results with online sales on SyncTree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your SyncTree, your customers won&rsquo;t even need to leave your social media to go to another site and pay!
        <br /><br />
        “We love how SyncTree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany
      </>
    )
  },
  {
    question: 'Is SyncTree safe to use on all of my social media profiles?',
    answer: (
      <>
        SyncTree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok&rsquo;s own social media accounts! Because SyncTree is the original and most popular link-in-bio tool, the synctree.app URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.
      </>
    )
  },
  {
    question: 'What makes SyncTree better than the other link in bio options?',
    answer: (
      <>
        We have our own opinions here, of course, but the stories of the people who use SyncTree matter more. Let&rsquo;s hear what they have to say:
        <br /><br />
        “Four months into creating, someone messaged me like: You need a SyncTree. I can&rsquo;t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got SyncTree set up, I was like, oh my god – why did I spend $100 on a website? I don&rsquo;t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman
        <br /><br />
        It&rsquo;s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T
        <br /><br />
        ”Websites are cool (I have one) but SyncTrees just make it so much easier.” – Tan Nguyen
        <br /><br />
        “I love their analytics. Other link-in-bio companies don&rsquo;t provide extensive data on what&rsquo;s going on.” – Riley Lemon
        <br /><br />
        SyncTree invented the bio link tool in 2016, and it continues to be the world&rsquo;s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on SyncTree today and see for yourself!
      </>
    )
  },
  {
    question: 'How can I drive more traffic to and through my SyncTree?',
    answer: (
      <>
        Sharing your SyncTree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.
        <br /><br />
        Once visitors arrive on your SyncTree, easy-to-understand analytics help you quickly and easily discover where they&rsquo;re coming from, and what they&rsquo;re clicking on. You can immediately see what&rsquo;s working and what&rsquo;s not and improve your SyncTree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!
      </>
    )
  },
  {
    question: 'How many links should I have on my SyncTree?',
    answer: (
      <>
        This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your SyncTree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.
        <br /><br />
        That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.
        <br /><br />
        You can use features on SyncTree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you&rsquo;ve got to share, you can drive your visitors to what&rsquo;s most important, first.
      </>
    )
  },
  {
    question: 'Do I need a website to use SyncTree?',
    answer: (
      <>
        No, you don&rsquo;t! SyncTree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that&rsquo;s great: you can add it to your SyncTree.
        <br /><br />
        “I hardly touch my website any more. I just send people to my SyncTree! It&rsquo;s a good-looking, fresh interface… so much more dynamic. I can take a few minutes, update my links and put my phone away rather than spending 45 struggling on WordPress.” – @ashleyhopeperez
      </>
    )
  },
  {
    question: 'Where can I download the app?',
    answer: (
      <>
        Find it in the App Store, and in the Google Play store!
      </>
    )
  }
];


export default function HomeSectionSix() {

  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }


  return (
    <div className={styles.main_homeSix}>

      <h1 className={styles.main_homeSix_heading}>Got questions?</h1>

      <div className={styles.main_homeSix_question_container}>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.main_homeSix_question_box} ${openIndex === index ? styles.open : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className={styles.main_homeSix_question_front}>
              <span className={styles.main_homeSix_question_front_text}>
                {item.question}
              </span>
              <span className={styles.main_homeSix_question_front_img}>
                <img src='/ChevronDown_Icon.png' />
              </span>
            </div>
            <div className={styles.main_homeSix_question_back}>
              {item.answer}
            </div>
          </div>
        ))}

      </div>

    </div>
  )

}
