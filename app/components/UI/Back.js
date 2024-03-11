'use client'

import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();

  return <span className="absolute top-4 left-4">
    <MdOutlineArrowBackIos size={25} color="#EFEEE0" onClick={() => router.back()} />;
  </span>
};
export default Back;
