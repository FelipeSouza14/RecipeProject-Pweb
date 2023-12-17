import YouTubeBackgroundTwo from "./videoStructure";
import styles from "../../../styles/receita2/video2.module.css";

export default function PlayVideo() {
  return (
    <div className={styles.video}>
      <YouTubeBackgroundTwo videoLink={`https://www.youtube.com/embed/rdix1XxaZyU?autoplay=1&loop=1&controls=0&showinfo=0&mute=1`} />
    </div>
  );
}

