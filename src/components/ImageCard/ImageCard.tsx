import { Image } from "../../Types/Types";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  small: string;
  description: string;
  regular: string;
  openModal: (images: Image) => void;
};

function ImageCard({ small, description, regular, openModal }: ImageCardProps) {
  const handleOpenModal = () => {
    const image: Image = {
      id: "",
      description: description,
      urls: { small: small, regular },
    };
    openModal(image);
  };

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
