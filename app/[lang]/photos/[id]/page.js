import PhotoDetails from "@/app/components/photo-details/PhotoDetails";

const PhotoDetailsPage = async ({ params: { id, lang } }) => {
  return <PhotoDetails locale={lang} id={id} />;
};
export default PhotoDetailsPage;
