import { YouTubeBackgroundTwo } from "./videoStructure";
import styles from "../../../styles/receita2/video2.module.css";

export default function PlayVideo () {
  return (
    <div className={styles.video}>
      {/* <div className={styles.videoDiv}>aaaa</div> */}
      <YouTubeBackgroundTwo videoLink={`https://www.youtube.com/embed/Rz2SNm8VguE?autoplay=1&loop=1&controls=0&showinfo=0&mute=1`}/>
    </div>
  );
}

