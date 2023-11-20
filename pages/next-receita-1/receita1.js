import { HomeImage } from "./image1"
import { HomeDescription } from "./description1";
import { YouTubeBackground } from "./video1";
import styles from "../styles/receita1/receita1.module.css";

export default function Main(){
    return (
       <div className={styles.homePage}>  
         <YouTubeBackground />
            <div className={styles.leftDiv}>
               <HomeImage />
               <HomeDescription />
            </div>
       </div>
    )
 }