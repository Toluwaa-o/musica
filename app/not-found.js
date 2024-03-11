import Link from "next/link";
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="grid place-content-center h-[90vh] w-screen gap-4 md:h-screen md:w-full">
      <TbError404 size={100} color="#FACD66" className="m-auto" />
      <h2 className="text-xl text-textWhite text-center">
        Oops! Looks like the page you are looking for does not exist!
      </h2>
      <Link
        href={"/"}
        className="text-center uppercase text-accentGold font-bold text-[1rem] tracking-wider"
      >
        Go back home
      </Link>
    </div>
  );
}
