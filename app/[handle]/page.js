import styles from '@/styles/Handle.module.css';
import clientPromise from '../lib/mongodb';
import notFound from "../not-found";
import Link from 'next/link';


export default async function Page({ params }) {

    const { handle } = await params;

    const client = await clientPromise;
    const db = client.db('synctree');
    const collection = db.collection('links');

    const doc = await collection.findOne({ handle: handle })
    if (!doc) {
        return notFound();
    }

    const themeClass = `theme_${doc.theme.replace('#', '')}`;      // convert '#242222' => 'theme_242222'


    return (
        <div className={`${styles.main_handle} ${styles[themeClass]}`}>

            <div className={styles.handle_top}>

                <div className={styles.handle_container1}>
                    <img src={`/${doc.avatar}`} />
                </div>

                <div className={styles.handle_container2}>
                    <h2 className={`${styles.handle_container2_heading} ${styles[themeClass]}`}>{doc.handle}</h2>
                    <h4 className={`${styles.handle_container2_subheading} ${styles[themeClass]}`}>{doc.desc}</h4>
                </div>

                <div className={`${styles.handle_container3} ${styles[themeClass]}`}>
                    {doc.links.map((item, index) => {
                        return (
                            <Link key={index} href={item.link}>{item.linktext}</Link>
                        )
                    })}
                </div>

            </div>

            <div className={styles.handle_top}>

                <div className={styles.handle_container4}>
                    <Link href={'/'} className={styles.handle_container4_join}>Join SyncTree</Link>
                </div>

            </div>

        </div>
    )

}