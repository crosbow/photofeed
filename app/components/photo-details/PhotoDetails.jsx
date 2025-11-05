import AuthorInfo from "@/app/components/photo-details/AuthorInfo";
import MainPhotoInfo from "@/app/components/photo-details/MainPhotoInfo";
import PhotoAction from "@/app/components/photo-details/PhotoAction";
import getPhotoDetails from "@/app/utils/getPhotoDetails";
import { notFound } from "next/navigation";

const PhotoDetails = async ({ id, locale }) => {
  const photo = await getPhotoDetails(id);

  if (!photo.title) {
    return notFound();
  }

  const { author, likes } = photo;
  return (
    <div className="container my-4 lg:my-8 ">
      <MainPhotoInfo photo={photo} locale={locale}>
        <AuthorInfo author={author} locale={locale} />
        <PhotoAction likes={likes} locale={locale} />
      </MainPhotoInfo>
    </div>
  );
};
export default PhotoDetails;
