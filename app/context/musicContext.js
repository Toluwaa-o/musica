"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const MusicContext = createContext({
  song: {},
  album: {},
  isPlaying: false,
  shuffle: false,
  replay: false,
  volume: null,
  value: null,
  playlist: [],
  fromLS: false,
});

const Musicacontext = ({ children }) => {
  const [musicState, setMusicState] = useState({
    song: {},
    album: [],
    isPlaying: false,
    shuffle: false,
    replay: false,
    volume: null,
    value: null,
    playlist: [],
    fromLS: false,
  });

  const playSong = () => {
    setMusicState((prev) => ({ ...prev, isPlaying: true }));
  };

  const pauseSong = () => {
    setMusicState((prev) => ({ ...prev, isPlaying: false }));
  };

  const playNext = () => {
    if (musicState.shuffle) {
      const x = Math.floor(Math.random() * musicState.album.length);
      setMusicState((prev) => ({
        ...prev,
        song: { ...prev.album[x] },
        fromLS: false,
      }));
    } else {
      for (let i = 0; i < musicState.album.length; i++) {
        if (musicState.song._id === musicState.album[i]._id) {
          if (i + 1 === musicState.album.length) {
            return setMusicState((prev) => ({
              ...prev,
              song: { ...prev.album[0] },
              fromLS: false,
            }));
          }
          let y = i + 1;
          return setMusicState((prev) => ({
            ...prev,
            song: { ...prev.album[y] },
            fromLS: false,
          }));
        }
      }
    }
  };

  const playPrev = () => {
    if (musicState.shuffle) {
      let x = Math.floor(Math.random() * musicState.album.length);

      setMusicState((prev) => ({
        ...prev,
        song: { ...prev.album[x] },
        fromLS: false,
      }));
    } else {
      for (let j = 0; j < musicState.album.length; j++) {
        if (musicState.album[j]._id === musicState.song._id) {
          if (j === 0) {
            return setMusicState((prev) => ({
              ...prev,
              song: { ...prev.album[prev.album.length - 1] },
              fromLS: false,
            }));
          }
          let x = Number(j) - 1;
          return setMusicState((prev) => ({
            ...prev,
            song: { ...prev.album[x] },
            fromLS: false,
          }));
        }
      }
    }
  };

  const toggleShuffle = () => {
    setMusicState((prev) => ({ ...prev, shuffle: !prev.shuffle }));
  };

  const toggleReplay = () => {
    setMusicState((prev) => ({ ...prev, replay: !prev.replay }));
  };

  const updatePlaylist = () => {
    const likedSongs = JSON.parse(localStorage.getItem("liked-songs"));
    if (likedSongs && likedSongs.length) {
      setMusicState((prev) => ({ ...prev, playlist: likedSongs }));
    }
  };

  return (
    <MusicContext.Provider
      value={{
        ...musicState,
        setMusicState,
        playSong,
        pauseSong,
        toggleReplay,
        toggleShuffle,
        playPrev,
        playNext,
        updatePlaylist,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export default Musicacontext;
