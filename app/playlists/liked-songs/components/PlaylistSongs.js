"use client";

import SongCard from "@/app/components/Songs/SongCard";
import { ImSad2 } from "react-icons/im";
import { MusicContext } from "@/app/context/musicContext";
import { useContext, useEffect } from "react";
import Link from "next/link";

const PlaylistSongs = () => {
  const { playlist, updatePlaylist } = useContext(MusicContext);

  useEffect(() => {
    updatePlaylist();
  }, []);
  return (
    <span className="overflow-scroll max-h-[100%] min-h-[30vh]">
      {playlist && playlist.length ? (
        playlist.map((song) => (
          <SongCard key={song._id} {...song} songs={playlist} />
        ))
      ) : (
        <div className="min-h-[30vh] grid place-content-center gap-3 border-t mx-4">
          <ImSad2 size={50} className="m-auto" color="white" />
          <h3 className="text-textWhite text-center text-lg">
            No liked songs yet.
          </h3>

          <Link
            href="/"
            className="text-center text-accentGold uppercase font-bold underline text-sm tracking-wider"
          >
            Get Started
          </Link>
        </div>
      )}
    </span>
  );
};
export default PlaylistSongs;
