import Image from "next/image";
import Link from "next/link";

const PhotoCard = async ({ photo }) => {
  const { title, url, id } = photo;

  return (
    <Link href={`/photos/${id}`} className="group">
      <Image src={url} alt={title} height={500} width={400} />

      <div className="title-container">
        <h4 className="title">{title}</h4>
      </div>
    </Link>
  );
};
export default PhotoCard;
