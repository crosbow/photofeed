const getPhotoDetails = async (photoId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/photos/${photoId}`
    );

    return await response.json();
  } catch (error) {
    console.log(error);

    return {};
  }
};
export default getPhotoDetails;
