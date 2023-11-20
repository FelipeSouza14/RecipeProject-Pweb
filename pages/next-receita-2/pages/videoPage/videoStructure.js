export function YouTubeBackgroundTwo ({videoLink}) {
  return (
        <iframe
            width="100%"
            height="100%"
            src={videoLink}
            frameBorder="0"
            allowFullScreen
        ></iframe>
  )
};