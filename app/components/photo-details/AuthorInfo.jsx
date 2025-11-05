import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import Image from "next/image";

const AuthorInfo = async ({ author, locale }) => {
  const { avatar, name, bio, followers } = author;

  const { photoDetails: dict } = await getDictionary(locale);

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <Image
            className="size-12 lg:size-14 rounded-full border"
            src={avatar}
            alt={name}
            height={12}
            width={12}
          />
          <div className="spacy-y-3">
            <h6 className="lg:text-lg font-bold">{name}</h6>
            <p className=" text-xs lg:text-sm">
              {followers} {dict.followers}
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1.5  text-xs xl:text-sm">
          <Image
            src="/follow.svg"
            className="w-5 h-5"
            height={20}
            width={20}
            alt="follow icon"
          />
          {dict.follow}
        </button>
      </div>
      <p className="text-xs lg:text-sm ">{bio}</p>
    </div>
  );
};
export default AuthorInfo;
