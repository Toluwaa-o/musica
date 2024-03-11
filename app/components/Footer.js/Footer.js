"use client";

import { MusicContext } from "@/app/context/musicContext";
import { useContext, useEffect, useRef, useState } from "react";
import { FaAngleDown, FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { ImShuffle } from "react-icons/im";
import { FiRepeat } from "react-icons/fi";
import Bar from "./Bar";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import formatFeatures from "@/app/components/UI/features";
import GetHeart from "@/utils/GetHeart";

const Footer = () => {
  const {
    setMusicState,
    isPlaying,
    toggleReplay,
    toggleShuffle,
    replay,
    shuffle,
    playPrev,
    playNext,
    pauseSong,
    song,
    fromLS,
  } = useContext(MusicContext);

  const myRef = useRef();
  let x = 0;

  const [mySong, setMySong] = useState(song);
  const [songDetails, setSongDetails] = useState(null);
  const [isPlay, setIsPlay] = useState(myRef.current && myRef.current.playing);

  useEffect(() => {
    setMySong(song);

    if (song && song.link)
      localStorage.setItem("curr_song", JSON.stringify(song));
  }, [song]);

  const playSong = () => {
    if (!isPlay) {
      setMusicState((prev) => ({
        ...prev,
        isPlaying: !prev.isPlaying,
        fromLS: false,
      }));
      myRef.current.play();
    } else {
      setMusicState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
      myRef.current.pause();
    }
  };

  useEffect(() => {
    if (myRef.current && !fromLS) {
      myRef.current.currentTime = 0;
      myRef.current.play();
      setMusicState((prev) => ({ ...prev, isPlaying: true }));
    }
  }, [song.link]);

  useEffect(() => {
    if (!song?.link) return;

    setIsPlay(isPlaying);
    if (isPlaying && !myRef.current.playing) {
      myRef.current.play();
    } else {
      myRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    setSongDetails((prev) => ({
      volume: myRef.current && myRef.current.volume,
      value:
        myRef.current &&
        Math.round((myRef.current.currentTime / myRef.current.duration) * 100),
    }));
  }, [myRef.current]);

  const changePoint = (e) => {
    myRef.current.currentTime = (e.target.value / 100) * myRef.current.duration;

    setMusicState((prev) => ({
      ...prev,
      value: Math.round(
        (myRef.current.currentTime / myRef.current.duration) * 100
      ),
    }));
  };

  const changeVolume = (e) => {
    myRef.current.volume = e.target.value;

    setSongDetails((prev) => ({
      ...prev,
      volume: myRef.current.volume,
    }));

    setMusicState((prev) => ({
      ...prev,
      volume: myRef.current.volume,
    }));
  };

  const toggleMute = (e) => {
    myRef.current.volume = myRef.current.volume ? 0 : 1;

    setSongDetails((prev) => ({
      ...prev,
      volume: myRef.current.volume,
    }));

    setMusicState((prev) => ({
      ...prev,
      volume: myRef.current.volume,
    }));
  };

  const [showExpanded, setShowExpanded] = useState(false);
  const features = song.feature ? song?.feature.map(({ name }) => name) : null;

  const repeatOnEnd = () => {
    if (replay) {
      myRef.current.currentTime = 0;
      return myRef.current.play();
    } else {
      playNext();
    }
  };

  useEffect(() => {
    const prevSong = JSON.parse(localStorage.getItem("curr_song"));

    if (prevSong && prevSong.link) {
      setMusicState((prev) => ({ ...prev, song: prevSong, fromLS: true }));
    }
  }, []);

  return (
    <>
      {song?.link && (
        <audio
          src={song.link}
          ref={myRef}
          onPlay={() => {
            setMusicState((prev) => ({ ...prev, isPlaying: true }));
          }}
          onPause={pauseSong}
          onEnded={repeatOnEnd}
          onTimeUpdate={() => {
            setSongDetails((prev) => ({
              ...prev,
              value: Math.round(
                (myRef.current.currentTime / myRef.current.duration) * 100
              ),
            }));
          }}
        />
      )}
      {mySong?.link && (
        <Bar
          song={song}
          playSong={playSong}
          isPlay={isPlay}
          toggleExpanded={() => setShowExpanded(!showExpanded)}
          songDetails={songDetails}
          changePoint={changePoint}
          changeVolume={changeVolume}
          toggleMute={toggleMute}
        />
      )}
      {mySong?.link && showExpanded && (
        <div
          className={`md:hidden overflow-hidden fixed top-0 left-0 w-[100vw] h-[100vh] bg-bgDark z-[10] flex flex-col py-6 px-4 gap-4 ${
            showExpanded ? "in" : "out"
          }`}
        >
          <span className="flex justify-between items-center mb-[10vh]">
            <FaAngleDown
              size={30}
              color="#EFEEE0"
              onClick={() => setShowExpanded(!showExpanded)}
            />
            <SlOptionsVertical size={30} color="#EFEEE0" />
          </span>

          <img
            src={song.cover ? song.cover : song.album.cover}
            alt={song.title}
            className="w-[320px] h-[320px] bg-textWhite mx-auto rounded-lg mb-[8vh]"
          />

          <span className="flex justify-between items-center px-2">
            <span>
              <h2 className="text-2xl text-textWhite">{song.title}</h2>
              <p className="text-lg text-gray-400">
                {formatFeatures(song.artist.name, features)}
              </p>
            </span>

            <GetHeart />
          </span>

          <div className="flex flex-col gap-8">
            <input
              className="w-full"
              aria-label="song-range"
              type="range"
              defaultValue={0}
              min="0"
              max="100"
              value={songDetails ? songDetails.value : x}
              onChange={changePoint}
            />

            <span className="flex justify-between p-2 items-center">
              <ImShuffle
                onClick={() => toggleShuffle()}
                color={`${shuffle ? "#FACD66" : "#EFEEE0"}`}
                size={30}
              />

              <IoMdSkipBackward color="#EFEEE0" size={30} onClick={playPrev} />

              <span
                onClick={() => playSong()}
                className="bg-white rounded-full w-fit"
              >
                {!isPlay ? (
                  <FaCirclePlay color="#FACD66" size={38} />
                ) : (
                  <FaCirclePause color="#FACD66" size={38} />
                )}
              </span>

              <IoMdSkipForward onClick={playNext} color="#EFEEE0" size={30} />

              <FiRepeat
                onClick={() => toggleReplay()}
                color={`${replay ? "#FACD66" : "#EFEEE0"}`}
                size={30}
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
};
export default Footer;
