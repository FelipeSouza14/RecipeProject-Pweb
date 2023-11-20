import { HomeImage } from "./image2"
import { HomeDescription } from "./description2";
import { YouTubeBackgroundTwo } from "./video2";
import styles from "../styles/receita2/receita2.module.css";

export default function Main(){
    return (
       <div className={styles.homePage}>  
         <YouTubeBackgroundTwo videoLink={`https://www.youtube.com/embed/Rz2SNm8VguE?autoplay=1&loop=1&controls=0&showinfo=0&mute=1`}/>
            <div className={styles.leftDiv}>
               <HomeImage imagePath={"/assets/subnautica/subnautica-image.png"}/>
               <HomeDescription description={`Subnautica é um jogo de aventura e sobrevivência ambientado em um planeta oceânico alienígena. Os jogadores exploram o fundo do mar, enfrentam perigos, coletam recursos e constroem bases submarinas para sobreviver. A narrativa envolve descobrir os segredos de uma civilização alienígena enquanto se depara com criaturas marinhas hostis. Com gráficos impressionantes e uma atmosfera imersiva, Subnautica é elogiado por sua jogabilidade envolvente e design de mundo intrigante.`}/>
            </div>
       </div>
    )
 }