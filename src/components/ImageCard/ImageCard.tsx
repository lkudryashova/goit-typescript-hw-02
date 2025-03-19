import s from "./ImageCard.module.css";
import { Image } from "../App/App.types";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}
export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div onClick={onClick}>
      <img
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
}
