"use client";

import { MusicContext } from "@/app/context/musicContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { TiPin } from "react-icons/ti";

const LikedSongs = ({}) => {
  const { playlist, updatePlaylist } = useContext(MusicContext);

  useEffect(() => {
    updatePlaylist();
  }, []);

  return (
    <Link
      href={`/playlists/liked-songs`}
      className="bg-bgDarker p-4 border border-accentGray text-center rounded-lg min-h-fit grid gap-2"
    >
      <img
        src={"/Covers/Liked Songs.jpg"}
        alt="Liked Songs"
        className="bg-textWhite rounded-lg w-[100px] flex h-[100px] md:w-[150px] md:h-[150px] m-auto"
      />
      <span>
        <span className="flex items-center">
          <TiPin size={30} color="#FACD66" />
          <h3 className="text-accentGold text-lg font-bold">Liked Songs</h3>
        </span>
        <p className="text-textWhite">{playlist && playlist.length} Songs</p>
      </span>
    </Link>
  );
};
export default LikedSongs;
