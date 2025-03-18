import s from "./ImageModal.module.css";
import Modal from "react-modal";

export default function ImageModal({ selectedImage, closeModal }) {
  if (!selectedImage) {
    return null;
  }
  return (
    <Modal
      isOpen={!!selectedImage}
      onRequestClose={closeModal}
      ariaHideApp={false}
      overlayClassName={s.modalOverlay}
      className={s.modal}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <img
          className={s.image}
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
        <div className={s.imageDescription}>
          <p>{selectedImage.alt_description}</p>
          <p>author: {selectedImage.user.name}</p>
        </div>
      </div>
    </Modal>
  );
}
