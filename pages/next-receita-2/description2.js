import styles from "../styles/receita2/description2.module.css";

export function HomeDescription({description}) {
    return(
            <p className={styles.descriptionStyle}>
                {description}
            </p>
    )
}