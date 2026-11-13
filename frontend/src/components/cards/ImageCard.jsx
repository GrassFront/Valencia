import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { classNames } from "../../lib/classNames";
import Card from "./Card";

export default function ImageCard({
  alt = "",
  children,
  className,
  height,
  imageClassName,
  src,
  width,
  ...props
}) {
  if (src && (!width || !height)) {
    throw new Error("ImageCard requires width and height when src is provided.");
  }

  return (
    <Card className={classNames("flex flex-col", className)} {...props}>
      <div
        className={classNames(
          "relative w-full overflow-hidden bg-warm-beige",
          imageClassName,
        )}
        style={{ aspectRatio: width && height ? `${width} / ${height}` : "308.5 / 228" }}
      >
        {src ? (
          <Image
            alt={alt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src={src}
          />
        ) : (
          <span className="flex h-full items-center justify-center text-rich-brown">
            <ImageIcon aria-hidden="true" size={24} />
          </span>
        )}
      </div>
      {children}
    </Card>
  );
}
