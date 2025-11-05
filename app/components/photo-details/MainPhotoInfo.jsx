import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import { formateDate } from "@/app/utils/dateFormat";
import Image from "next/image";

const MainPhotoInfo = async ({ children, photo, locale }) => {
  const { url, title, tags, views, share, uploaded } = photo;

  const { photoDetails: dict } = await getDictionary(locale);

  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10">
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto"
          src={url}
          alt={title}
          height={500}
          width={500}
        />
      </div>

      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">{title}</h2>
        <div className="text-xs lg:text-sm  mb-6">
          {tags.map((tag) => (
            <span key={tag}> {`#${tag}`} </span>
          ))}
        </div>
        <div className="space-y-2.5  text-xs lg:text-sm">
          <div className="flex justify-between">
            <span>{dict.views}</span>
            <span className="font-bold">{views}</span>
          </div>
          <div className="flex justify-between">
            <span>{dict.share}</span>
            <span className="font-bold">{share}</span>
          </div>
          <div className="flex justify-between">
            <span>{dict.uploaded}</span>
            <span className="font-bold">{formateDate(uploaded)}</span>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};
export default MainPhotoInfo;
