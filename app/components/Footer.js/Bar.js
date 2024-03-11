import formatFeatures from "@/app/components/UI/features";
import AudioControls from "../Songs/Audio";

const Bar = ({
  song,
  playSong,
  isPlay,
  toggleExpanded,
  changePoint,
  songDetails,
  changeVolume,
  toggleMute,
}) => {
  const features = song.feature.map(({ name }) => name);
  return (
    <div className="fixed w-[100vw] max-w-[100dvw] h-[10vh] md:h-[15vh] gap-4 items-center px-4 py-2 flex left-0 bottom-0 border border-myBorder backdrop-blur-myBlur bg-barBg md:z-[9] md:px-8">
      <img
        onClick={toggleExpanded}
        src={song.cover ? song.cover : song.album.cover}
        className="w-[45px] rounded-lg h-[45px] md:w-[50px] md:h-[50px] bg-textWhite flex"
      />
      <span onClick={toggleExpanded} className="md:mr-auto">
        {song.title.length > 15 ? (
          <marquee
            truespeed={500}
            width={80}
            className="text-textWhite md:text-[1.2rem] md:hidden"
          >
            {song.title}
          </marquee>
        ) : (
          <h4 className="text-textWhite md:hidden">{song.title}</h4>
        )}
        {song.title.length > 30 ? (
          <marquee
            truespeed={500}
            width={300}
            className="hidden md:block text-textWhite text-[1.2rem]"
          >
            {song.title}
          </marquee>
        ) : (
          <h4 className="text-textWhite hidden md:block text-[1.2rem]">{song.title}</h4>
        )}
        <p className="text-gray-300 text-[0.9rem]">
          {formatFeatures(song.artist.name, features, true)}
        </p>
      </span>
      <AudioControls
        changePoint={changePoint}
        songDetails={songDetails}
        changeVolume={changeVolume}
        toggleMute={toggleMute}
        link={song.link}
        playSong={playSong}
        isPlay={isPlay}
      />
    </div>
  );
};
export default Bar;
