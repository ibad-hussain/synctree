"use client"
import React from 'react';
import styles from '@/styles/Marketplace.module.css';
import HomeSectionSeven from "@/components/HomeSectionSeven";


const Marketplace = () => {

    return (
        <div className={styles.main_marketplace}>
            <div className={styles.marketplace_container}>
                <h1>MARKETPLACE</h1>
            </div>
            <HomeSectionSeven />
        </div>
    )

}

export default Marketplace
