import styles from "../../../styles/receita2/video2.module.css";

export function YouTubeBackgroundTwo ({videoLink}) {
  return (
        <iframe
            className={styles.videoPlay}
            src={videoLink}
            frameBorder="0"
            allowFullScreen
        ></iframe>
  )
};