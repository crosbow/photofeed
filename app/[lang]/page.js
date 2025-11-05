import PhotoList from "../components/PhotoList";

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

  return <PhotoList photos={photos} />;
}
