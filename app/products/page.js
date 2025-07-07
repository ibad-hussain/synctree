"use client"
import React from 'react';
import styles from '@/styles/Products.module.css';
import HomeSectionSeven from "@/components/HomeSectionSeven";


const Products = () => {

    return (
        <div className={styles.main_products}>
            <div className={styles.products_container}>
                <h1>PRODUCTS</h1>
            </div>
            <HomeSectionSeven />
        </div>
    )

}

export default Products
