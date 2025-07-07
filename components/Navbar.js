"use client"
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';


const Navbar = () => {

  const router = useRouter();

  const pathname = usePathname();
  const isGeneratePage = pathname === "/generate";
  const showNavbar = ['/products', '/templates', '/marketplace', '/learn', '/pricing', '/about'].includes(pathname);


  return (
    <>
      {showNavbar &&
        <div className={`${styles.main_navbar} ${isGeneratePage ? styles.main_navbar_generatePage : ""}`}>

          <div className={styles.navbar_left}>
            <Link href={'/'} className={styles.navbar_logo}>
              <span>SyncTree</span>
              <img alt='SyncTree Logo' src='/SyncTree_Logo.png' />
            </Link>
            <div className={styles.navbar_links}>
              <Link href={'/products'}>Products</Link>
              <Link href={'/templates'}>Templates</Link>
              <Link href={'/marketplace'}>Marketplace</Link>
              <Link href={'/learn'}>Learn</Link>
              <Link href={'/pricing'}>Pricing</Link>
              <Link href={'/about'}>About</Link>
            </div>
          </div>

          <div className={styles.navbar_right}>
            <div className={styles.navbar_btns}>
              <button type='button' className={styles.navbar_login} onClick={() => router.push('/generate')}>Log in</button>
              <button type='button' className={styles.navbar_signup} onClick={() => router.push('/generate')}>Sign up free</button>
            </div>
          </div>

        </div>
      }
    </>
  )

}

export default Navbar
