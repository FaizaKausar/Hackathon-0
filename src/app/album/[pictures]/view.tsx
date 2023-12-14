"use client";
import { CldImage } from "next-cloudinary";
import { BiEditAlt } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AddTags } from "./action";
import { useState } from "react";
import Link from "next/link";
import { ServerCogIcon } from "lucide-react";

const View = ({ src, tag, fun }: { src: string; tag: string[]; fun: any }) => {
  const [fav, setfav] = useState(tag.includes("favourite"));
  return (
    <div className=" relative flex">
      <CldImage
        className="rounded-sm"
        width="400"
        height="300"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      {/*Heart Icon for Favourite*/}
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          fun;
          setfav(!fav);
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <AiFillHeart className="w-8 h-8 cursor-pointer text-red-500" />
        ) : (
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
        )}
      </div>
      {/*Edit Icon for Editing Page*/}
      <div className="absolute top-1 left-1">
        <Link href={`/edit?publicId=${src}`}>
          <BiEditAlt className="w-8 h-8 cursor-pointer text-white hover:text-blue-800 duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default View;
