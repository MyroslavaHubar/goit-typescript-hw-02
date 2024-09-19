import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../Types/Types";

type ImageGalleryProps = {
  images: Image[];
  openModal: (images: Image) => void;
};

function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <ul className={css.modalGalleryList}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.modalGalleryItem}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
