import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import Image from "next/image";

const PhotoAction = async ({ likes, locale }) => {
  const { photoDetails: dict } = await getDictionary(locale);

  return (
    <div className="mt-6">
      <div className="flex items-stretch gap-3 text-black">
        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400 bg-gray-400">
          <Image
            src="/heart.svg"
            className="w-5 h-5"
            height={20}
            width={20}
            alt="heart icon"
          />
          {likes}
        </button>
        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400 bg-gray-400">
          <Image
            src="/save.svg"
            className="w-5 h-5"
            height={20}
            width={20}
            alt="save icon"
          />
          {dict.save}
        </button>
        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400 bg-gray-400">
          <Image
            src="/share.svg"
            className="w-5 h-5"
            height={20}
            width={20}
            alt="share icon"
          />
          {dict.share}
        </button>
      </div>
    </div>
  );
};
export default PhotoAction;
