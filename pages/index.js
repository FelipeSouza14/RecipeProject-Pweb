import styles from "./styles/index.module.css";
import { HomePage } from "./homeScreen/homePage";

export default function Main (){
    return(
        <div className={styles.homePage}>
            <HomePage />
        </div>
    )
}