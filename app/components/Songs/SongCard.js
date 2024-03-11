"use client";

import formatFeatures from "@/app/components/UI/features";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import { memo, useContext } from "react";
import { MusicContext } from "@/app/context/musicContext";

const SongCard = ({
  cover,
  _id,
  artist,
  feature,
  title,
  order,
  album,
  fromAlbum,
  link,
  songs,
}) => {
  const { setMusicState, isPlaying, song } = useContext(MusicContext);

  const features = feature.map(({ name }) => name);
  return (
    <span
      className="bg-bgDark py-2 px-4 min-h-fit flex flex-row gap-4 items-center"
      onClick={() =>
        setMusicState((prev) => ({
          ...prev,
          song: {
            cover,
            _id,
            artist,
            feature,
            title,
            order,
            album,
            link,
          },
          album: [...songs],
        }))
      }
    >
      {!fromAlbum ? (
        <img
          src={cover ? cover : album.cover}
          alt={title}
          className="w-[40px] h-[40px]"
        />
      ) : (
        <p className="text-textWhite">{order}</p>
      )}
      <span>
        <span className="md:flex md:gap-8 items-center">
          {title.length > 20 ? (
            <>
              <marquee
                truespeed={500}
                width={150}
                className="text-textWhite text-lg font-bold md:hidden"
              >
                {title}
              </marquee>
              <h3 className="text-textWhite text-lg font-bold hidden md:flex">
                {title}
              </h3>
            </>
          ) : (
            <h3 className="text-textWhite text-lg font-bold">{title}</h3>
          )}

          <p className="text-gray-300">
            {formatFeatures(artist.name, features)}
          </p>
        </span>
      </span>

      {isPlaying && song?._id === _id ? (
        <FaRegCirclePause
          onClick={() =>
            setMusicState((prev) => ({
              ...prev,
              isPlaying: false,
            }))
          }
          className="ml-auto"
          size={25}
          color="#FACD66"
        />
      ) : (
        <FaRegCirclePlay
          onClick={() =>
            setMusicState((prev) => ({
              ...prev,
              song: {
                cover,
                _id,
                artist,
                feature,
                title,
                order,
                album,
                link,
              },
              album: [...songs],
            }))
          }
          className="ml-auto"
          size={25}
          color="#FACD66"
        />
      )}
    </span>
  );
};
export default memo(SongCard);
