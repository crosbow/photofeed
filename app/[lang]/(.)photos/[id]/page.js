import Modal from "@/app/components/Modal";
import PhotoDetailsContent from "@/app/components/photo-details/PhotoDetails";

const PhotoDetailsModal = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <PhotoDetailsContent id={id} locale={lang} />
    </Modal>
  );
};
export default PhotoDetailsModal;
