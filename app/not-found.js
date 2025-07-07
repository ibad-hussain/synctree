import styles from '@/styles/NotFound.module.css';
import Link from 'next/link';


export default function NotFound() {

  return (
    <div className={styles.main_notfound}>

      <h1 className={styles.notfound_heading}>Oops! Something went wrong!</h1>
      <div className={styles.notfound_linkcontainer}>
        <Link href={'/'} className={styles.notfound_linkcontainer_join}>Join SyncTree</Link>
      </div>

    </div>
  )

}
