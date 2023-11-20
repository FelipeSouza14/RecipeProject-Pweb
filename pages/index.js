import styles from "./styles/index.module.css";
import { HomeCards } from "./homeScreen/homePage";

export default function Main (){
    return(
        <div className={styles.homePage}>
            <h1 className={styles.title}> RECEITAS DE NEXT - TERCEIRA UNIDADE</h1>
            <HomeCards />
        </div>
    )
}