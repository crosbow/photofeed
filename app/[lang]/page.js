import PhotoCard from "../components/PhotoCard";

const fetchPhotos = async () => {
  try {
    const fetchData = await fetch("http://localhost:3000/api/v1/photos");

    return fetchData.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Home() {
  const photos = await fetchPhotos();

  return (
    <div className="img-grid -z-10">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
