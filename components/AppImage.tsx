import NextImage, { ImageProps } from "next/image";

export default function AppImage(props: ImageProps) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const src =
    typeof props.src === "string" && props.src.startsWith("/")
      ? `${base}${props.src}`
      : props.src;
  return <NextImage {...props} src={src} />;
}
