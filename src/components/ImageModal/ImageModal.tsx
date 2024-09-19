import { Image } from "../../Types/Types";
import css from "./ImageModal.module.css";
import Modal from "react-modal";

type ImageModalProps = {
  image: Pick<Image, "urls" | "description"> | null;
  closeModal: () => void;
  modalIsOpen: boolean;
};

Modal.setAppElement("#root");

function ImageModal({ image, closeModal, modalIsOpen }: ImageModalProps) {
  if (!image || !image.urls) return null;
  console.log(image);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.imageModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(171, 169, 169, 0.8)",
        },
        content: {
          top: "5%",
          bottom: "5%",
          left: "5%",
          right: "5%",
          marginRight: "auto",
          marginLeft: "auto",
          transform: "none",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          maxHeight: "90vh",
          maxWidth: "90vw",
        },
      }}
    >
      <div className={css.imageModalContainer}>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.description}
        />
      </div>
    </Modal>
  );
}

export default ImageModal;
