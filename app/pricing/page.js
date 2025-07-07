"use client"
import React from 'react';
import styles from '@/styles/Pricing.module.css';
import HomeSectionSeven from "@/components/HomeSectionSeven";


const Pricing = () => {

    return (
        <div className={styles.main_pricing}>
            <div className={styles.pricing_container}>
                <h1>PRICING</h1>
            </div>
            <HomeSectionSeven />
        </div>
    )

}

export default Pricing
