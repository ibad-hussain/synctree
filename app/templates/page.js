"use client"
import React from 'react';
import styles from '@/styles/Templates.module.css';
import HomeSectionSeven from "@/components/HomeSectionSeven";


const Templates = () => {

    return (
        <div className={styles.main_templates}>
            <div className={styles.templates_container}>
                <h1>TEMPLATES</h1>
            </div>
            <HomeSectionSeven />
        </div>
    )

}

export default Templates
