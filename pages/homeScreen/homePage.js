import styles from "./homePage.module.css";
import Link from "next/link";

export function HomeCards (){
    return (
        <div className={styles.cardsDiv}>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src="" className={styles.cardStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src="" className={styles.cardStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src="" className={styles.cardStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src="" className={styles.cardStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src="" className={styles.cardStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src="" className={styles.cardStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src="" className={styles.cardStyle}/>
                </div>
            </Link>
        </div>
    )
}
