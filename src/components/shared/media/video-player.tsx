type VideoPlayerProps = {
  src: string;
  poster?: string;
  title?: string;
  captions?: string;
};

export function VideoPlayer({
  src,
  poster,
  title,
  captions,
}: VideoPlayerProps) {
  return (
    <video
      className="aspect-video w-full rounded-lg bg-black"
      controls
      playsInline
      preload="none"
      poster={poster}
      aria-label={title}
    >
      <source src={src} type="video/mp4" />
      {captions && (
        <track
          src={captions}
          kind="captions"
          srcLang="uk"
          label="Українська"
          default
        />
      )}
      Ваш браузер не підтримує відтворення відео.
    </video>
  );
}
