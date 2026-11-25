"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  poster?: string;
};

export function YouTubeEmbed({ videoId, title, poster }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
      {isLoaded ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          aria-label={`Відтворити відео: ${title}`}
          className="group absolute inset-0 flex size-full items-center justify-center"
          style={
            poster
              ? {
                  backgroundImage: `url(${poster})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
            <Play className="size-7 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
