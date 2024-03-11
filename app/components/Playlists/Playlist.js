import Link from "next/link";

const SinglePlaylist = ({ title, songs, _id, cover }) => {
  return (
    <Link
      href={`/playlists/${_id}`}
      className="bg-bgDarker p-4 border border-accentGray text-center rounded-lg min-h-fit grid gap-2"
    >
      <img
        src={cover}
        alt={title}
        className="bg-textWhite rounded-lg w-[100px] flex h-[100px] md:w-[150px] md:h-[150px] m-auto"
      />
      <span>
        <h3 className="text-accentGold text-lg font-bold">{title}</h3>
        <p className="text-textWhite">{songs.length} Songs</p>
      </span>
    </Link>
  );
};
export default SinglePlaylist;
