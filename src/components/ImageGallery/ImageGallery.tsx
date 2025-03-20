import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

export default function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li className={s.galleryItem} key={image.id}>
          <ImageCard image={image} onClick={() => openModal(image)} />
        </li>
      ))}
    </ul>
  );
}
