import styles from "./homePage.module.css";
import Link from "next/link";

export function HomeCards (){
    return (
        <div className={styles.cardsDiv}>
            <Link href="../next-receita-1/receita1">
                <div className={styles.homeCardStyle}>
                    <img src={"/assets/cards/next-receita-1.png"} className={styles.cardsImageStyle}/>
                </div>
            </Link>
            <Link href="../next-receita-2/receita2">
                <div className={styles.homeCardStyle}>
                    <img src={"/assets/cards/next-receita-2.png"} className={styles.cardsImageStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src={"/assets/cards/next-receita-3.png"} className={styles.cardsImageStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src={"/assets/cards/next-receita-4.png"} className={styles.cardsImageStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src={"/assets/cards/next-receita-5.png"} className={styles.cardsImageStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src={"/assets/cards/next-receita-6.png"} className={styles.cardsImageStyle}/>
                </div>
            </Link>
            <Link href="">
                <div className={styles.homeCardStyle}>
                    <img src={"/assets/cards/next-receita-9.png"} className={styles.cardsImageStyle}/>
                </div>
            </Link>
        </div>
    )
}
