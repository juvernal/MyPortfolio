import Link from "next/link";

import {
  RiYoutubeLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiBehanceLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/juvernal"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/fonou-wilfried-11b50b225/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.facebook.com/juvernal.kamgang.1"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
