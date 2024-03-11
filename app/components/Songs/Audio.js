import { MusicContext } from "@/app/context/musicContext";
import GetHeart from "@/utils/GetHeart";
import { useContext } from "react";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { ImShuffle } from "react-icons/im";
import {
  IoMdSkipBackward,
  IoMdSkipForward,
  IoMdVolumeLow,
} from "react-icons/io";
import { BsVolumeMuteFill } from "react-icons/bs";

const AudioControls = ({
  playSong,
  isPlay,
  songDetails,
  changeVolume,
  changePoint,
  toggleMute,
}) => {
  const { playPrev, playNext, toggleReplay, toggleShuffle, replay, shuffle } =
    useContext(MusicContext);
  return (
    <>
      <span className="ml-auto md:ml-[unset]  md:mr-[15vw] md:flex md:flex-col md:gap-3">
        <span className="flex items-center ml-auto gap-4 md:m-auto md:gap-7">
          <span className="md:block hidden">
            <ImShuffle
              onClick={() => toggleShuffle()}
              color={`${shuffle ? "#FACD66" : "#EFEEE0"}`}
              size={28}
            />
          </span>
          <IoMdSkipBackward onClick={playPrev} color="#EFEEE0" size={25} />
          <span
            onClick={() => playSong()}
            className="bg-white rounded-full w-fit"
          >
            {!isPlay ? (
              <FaCirclePlay color="#FACD66" size={27} />
            ) : (
              <FaCirclePause color="#FACD66" size={27} />
            )}
          </span>
          <IoMdSkipForward onClick={playNext} color="#EFEEE0" size={25} />
          <span className="hidden md:block">
            <FiRepeat
              onClick={() => toggleReplay()}
              color={`${replay ? "#FACD66" : "#EFEEE0"}`}
              size={28}
            />
          </span>
        </span>
        <input
          className="w-[60vh] hidden md:block"
          aria-label="song-range"
          type="range"
          min="0"
          max="100"
          value={songDetails ? songDetails.value : 0}
          onChange={changePoint}
        />
      </span>

      <span className="hidden md:flex md:items-center">
        {songDetails.volume ? (
          <IoMdVolumeLow onClick={toggleMute} size={30} color="#EFEEE0" />
        ) : (
          <BsVolumeMuteFill onClick={toggleMute} size={30} color="#EFEEE0" />
        )}
        <input
          aria-label="song-range-volume"
          type="range"
          min="0"
          step="0.1"
          max="1"
          className="md:mr-[2vw]"
          value={songDetails ? songDetails.volume : 0}
          onChange={changeVolume}
        />

        <GetHeart />
      </span>
    </>
  );
};
export default AudioControls;
