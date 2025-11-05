import Modal from "@/app/components/Modal";
import PhotoDetails from "@/app/components/photo-details/PhotoDetails";

const PhotoDetailsModal = async ({ params: { id, lang } }) => {
  return (
    <Modal>
      <PhotoDetails id={id} locale={lang} />
    </Modal>
  );
};
export default PhotoDetailsModal;
