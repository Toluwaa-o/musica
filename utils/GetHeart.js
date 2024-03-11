"use client";

import { MusicContext } from "@/app/context/musicContext";
import { useContext, useEffect, useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const GetHeart = () => {
  const { song, updatePlaylist, playlist, setMusicState } =
    useContext(MusicContext);

  useEffect(() => {
    updatePlaylist();
  }, []);

  const addToLikedSongs = () => {
    let newPlaylist = playlist;

    if (playlist && playlist.length) {
      newPlaylist.push(song);
      setMusicState((prev) => ({
        ...prev,
        playlist: newPlaylist,
      }));
    } else {
      setMusicState((prev) => ({ ...prev, playlist: [song] }));
    }

    localStorage.setItem("liked-songs", JSON.stringify(playlist));
    return updatePlaylist();
  };

  const removeFromLikedSongs = () => {
    let newPlaylist = [];

    if (playlist && playlist.length) {
      newPlaylist = playlist.filter((s) => s._id !== song._id);
      setMusicState((prev) => ({ ...prev, playlist: newPlaylist }));
    }

    localStorage.setItem("liked-songs", JSON.stringify(newPlaylist));
    return updatePlaylist();
  };

  return (
    <span>
      {playlist && (
        <>
          {playlist.filter((s) => s._id === song._id).length ? (
            <IoHeartSharp
              onClick={removeFromLikedSongs}
              size={30}
              color="#FACD66"
            />
          ) : (
            <IoHeartOutline
              onClick={addToLikedSongs}
              size={30}
              color="#FACD66"
            />
          )}
        </>
      )}
    </span>
  );
};

export default GetHeart;
