import { Image } from "../../Types/Types";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  image: Image;
  openModal: (images: Image) => void;
};

function ImageCard({ image, openModal }: ImageCardProps) {
  const handleOpenModal = () => {
    openModal(image);
  };

  const {
    description,
    urls: { small },
  } = image;

  return (
    <img
      className={css.modalImg}
      src={small}
      alt={description}
      onClick={handleOpenModal}
    />
  );
}

export default ImageCard;
