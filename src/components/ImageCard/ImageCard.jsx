import s from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <div onClick={onClick}>
      <img
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
