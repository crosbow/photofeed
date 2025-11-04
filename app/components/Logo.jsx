import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="bg-gray-400 p-2 rounded-md">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws_logo.png"
        alt="Lws"
        height={100}
        width={165}
      />
    </Link>
  );
};
export default Logo;
