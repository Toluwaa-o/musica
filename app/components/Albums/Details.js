import Back from "../UI/Back";

const Details = ({ album, isAlbum }) => {
  return (
    <>
      <span className="md:hidden">
        <Back />
      </span>
      <img
        src={album.cover}
        alt={isAlbum ? album.title : album.name}
        className="w-[250px] h-[250px] rounded-xl m-auto md:hidden"
      />
      {isAlbum ? (
        <>
          <h2 className="text-accentGold md:hidden text-2xl font-bold p-4 text-center">
            {album.title}
          </h2>
          <p className="text-center md:hidden text-textWhite p-2">
            {album.description.slice(0, 99)}...
          </p>
        </>
      ) : (
        <span className="flex flex-col h-fit md:hidden">
          <h2 className="text-accentGold text-2xl font-bold p-4 text-center">
            {album.name}
          </h2>
          <p className="text-center border-b-2 mx-3 border-accentGold text-textWhite p-2 mt-[-1rem]">
            Enjoy some of the best music from global superstar {album.name}.
          </p>
        </span>
      )}
      <span className="relative w-[60%] m-auto">
        <span className="absolute top-4 left-[-30vh]">
          <Back />
        </span>
        <span className="hidden md:flex items-center py-[5vh]">
          <img
            src={album.cover}
            alt={isAlbum ? album.title : album.name}
            className="w-[250px] h-[250px] md:w-[200px] md:h-[200px] rounded-xl m-auto mr-[4rem]"
          />
          {isAlbum ? (
            <span className="flex flex-col">
              <h2 className="text-accentGold text-2xl font-bold p-4 text-center md:text-left">
                {album.title}
              </h2>
              <p className="text-center text-textWhite p-2 md:text-left">
                {album.description}...
              </p>
            </span>
          ) : (
            <span className="flex flex-col h-fit">
              <h2 className="text-accentGold text-2xl font-bold p-4 text-center">
                {album.name}
              </h2>
              <p className="text-center border-b-2 mx-3 border-accentGold text-textWhite p-2 mt-[-1rem]">
                Enjoy some of the best music from global superstar {album.name}.
              </p>
            </span>
          )}
        </span>
      </span>
    </>
  );
};
export default Details;
