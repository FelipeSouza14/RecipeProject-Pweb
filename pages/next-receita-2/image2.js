import styles from "../styles/receita2/image2.module.css";

export function HomeImage({ imagePath }) {
    return(
                <img src={imagePath} className={styles.imageStyle}/>
    )
}