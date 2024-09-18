import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../Types/Types";

type ImageGalleryProps = {
  images: Image[];
  openModal: () => void;
};

function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <ul className={css.modalGalleryList}>
      {images.map(({ id, description, urls: { small, regular } }: Image) => {
        return (
          <li key={id} className={css.modalGalleryItem}>
            <ImageCard
              small={small}
              regular={regular}
              description={description}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
