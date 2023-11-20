import Link from "next/link";
import styles from "../../../styles/receita2/homePage2.module.css";

export function HomePage2 ({ imagePath, description}){
    return(
        <div className={styles.homePage2}>
            <div className={styles.leftDiv}>
                <p className={styles.descriptionStyle}>
                    {description}
                </p>
            </div>
            <div className={styles.divTwo}>
                <img src={imagePath} className={styles.imageStyle}/>
                <Link href="../videoPage/video2">
                    <button className={styles.button}>
                        Assistir Trailer
                    </button>
                </Link>
            </div>
        </div>
    )
}