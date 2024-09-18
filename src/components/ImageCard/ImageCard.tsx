import css from "./ImageCard.module.css";

type ImageCardProps = {
  small: string;
  description: string;
  regular: string;
  openModal: (images: {
    urls: { regular: string };
    description: string;
  }) => void;
};

function ImageCard({ small, description, regular, openModal }: ImageCardProps) {
  return (
    <img
      className={css.modalImg}
      src={small}
      alt={description}
      onClick={() => openModal({ urls: { regular }, description })}
    />
  );
}

export default ImageCard;
