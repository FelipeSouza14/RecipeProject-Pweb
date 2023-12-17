import HomePage2 from "./pages/homePage/homePage2";
import styles from "../styles/receita2/receita2.module.css";

export default function Main() {
   return (
      <div className={styles.homePage}>
         <HomePage2 imagePath={"/assets/subnautica/subnautica-belowzero-capa1.jfif"} description={`Subnautica é um jogo de aventura e sobrevivência ambientado em um planeta oceânico alienígena. Os jogadores exploram o fundo do mar, enfrentam perigos, coletam recursos e constroem bases submarinas para sobreviver. A narrativa envolve descobrir os segredos de uma civilização alienígena enquanto se depara com criaturas marinhas hostis. Com gráficos impressionantes e uma atmosfera imersiva, Subnautica é elogiado por sua jogabilidade envolvente e design de mundo intrigante.`} />
      </div>
   )
}