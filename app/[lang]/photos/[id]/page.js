import AuthorInfo from "@/app/components/photo-details/AuthorInfo";
import MainPhotoInfo from "@/app/components/photo-details/MainPhotoInfo";
import PhotoAction from "@/app/components/photo-details/PhotoAction";
import getPhotoDetails from "@/app/utils/getPhotoDetails";
import { notFound } from "next/navigation";

const PhotoDetails = async ({ params: { id, lang } }) => {
  const photo = await getPhotoDetails(id);

  if (!photo.title) {
    return notFound();
  }

  const { author, likes } = photo;
  return (
    <div className="container my-4 lg:my-8 ">
      <MainPhotoInfo photo={photo} locale={lang}>
        <AuthorInfo author={author} locale={lang} />
        <PhotoAction likes={likes} locale={lang} />
      </MainPhotoInfo>
    </div>
  );
};
export default PhotoDetails;
