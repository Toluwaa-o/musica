"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

const Searches = ({ artist, clickHandler }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch(`https://musica-la8y51xuy-toluwaa-o.vercel.app//api/v1/artists?artist=${artist}`)
      .then((res) => res.json())
      .then((rus) => {
        setArtists([...rus.artists]);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }, [artist]);

  return (
    <div className="w-[100vw] h-[91vh] z-[9] bg-bgDarker absolute bottom-[-91vh] left-0 p-4 flex flex-col gap-4 overflow-scroll pb-[0.5rem] md:bottom-0 md:pl-[11vh] md:top-[11%] md:bg-bgDark md:z-10">
      <Suspense fallback={<p>Loading...</p>}>
        {artists.length ? (
          artists.map(({ name, cover, _id }) => (
            <Link
              href={`/artists/${_id}`}
              key={_id}
              className="flex items-center gap-4 border-b border-accentGray py-2 md:w-[40%]"
              onClick={clickHandler}
            >
              <img
                src={cover}
                alt={name}
                className="w-[50px] h-[50px] md:w-[35px] md:h-[35px] bg-textWhite rounded-full"
              />
              <p className="text-lg text-textWhite md:text-base">{name}</p>
            </Link>
          ))
        ) : (
          <p className="text-center text-textWhite text-lg">
            No artists found!
          </p>
        )}
      </Suspense>
    </div>
  );
};
export default Searches;
