const PhotoLayout = ({ children, photo }) => {
  return (
    <div>
      {photo}
      {children}
    </div>
  );
};
export default PhotoLayout;
