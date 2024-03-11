"use client";

import { MusicContext } from "@/app/context/musicContext";
import formatFeatures from "@/app/components/UI/features";
import { useContext } from "react";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";

const Single = ({
  title,
  artist,
  link,
  cover,
  releaseDate,
  feature,
  _id,
  album,
  songs,
}) => {
  const { song, setMusicState, isPlaying } = useContext(MusicContext);
  const features = feature.map(({ name }) => name);

  const play = () => {
    setMusicState((prev) => ({
      ...prev,
      song: {
        title,
        artist,
        link,
        cover,
        releaseDate,
        feature,
        _id,
        album,
      },
      album: songs,
      fromLS: false,
    }));
  };

  return (
    <span
      className="text-center p-2 rounded-lg min-h-fit grid grid-rows-my_rows gap-2 h-[24vh] md:min-h-fit md:h-[unset] md:gap-4 relative cursor-pointer"
      onClick={play}
    >
      {song?._id && song?._id === _id ? (
        isPlaying ? (
          <FaRegCirclePause
            className="rounded-full absolute top-4 right-2 z-[7]"
            size={25}
            color="#FACD66"
            onClick={() =>
              setMusicState((prev) => ({
                ...prev,
                isPlaying: false,
              }))
            }
          />
        ) : (
          <FaRegCirclePlay
            onClick={() => {
              setMusicState((prev) => ({
                ...prev,
                song: {
                  title,
                  artist,
                  link,
                  cover,
                  releaseDate,
                  feature,
                  _id,
                  album,
                },
                album: songs,
                isPlaying: true,
              }));
            }}
            size={25}
            className="absolute top-4 right-2 z-[7]"
            color="#FACD66"
          />
        )
      ) : null}
      <img
        className={`bg-textWhite rounded-lg w-[110px] flex h-[110px]  md:w-[150px] md:h-[150px] m-auto ${
          song?._id && song?._id === _id ? "opacity-40" : ""
        }`}
        src={cover ? cover : album.cover}
        alt={title}
      />
      <span>
        {title.length > 15 ? (
          <marquee
            width={100}
            truespeed={500}
            className="text-accentGold text-[1rem] font-bold m-auto"
          >
            {title}
          </marquee>
        ) : (
          <h3 className="text-accentGold text-[1rem] font-bold">{title}</h3>
        )}
        <p className="text-textWhite text-[0.8rem]">
          {formatFeatures(artist.name, features)}
        </p>
      </span>
    </span>
  );
};
export default Single;
