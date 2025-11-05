import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
  return (
    <div className="img-grid -z-10">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
export default PhotoList;
