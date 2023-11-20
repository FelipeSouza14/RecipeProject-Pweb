import styles from "../styles/receita2/video2.module.css";

export function YouTubeBackgroundTwo ({ videoLink }) {
  return (
    <div className={styles.video}>
      <iframe
        width="100%"
        height="100%"
        src={videoLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
};

