import Link from "next/link";

const SingleAlbum = ({ title, cover, artist, _id }) => {
  return (
    <Link
      href={`/albums/${_id}`}
      className="bg-bgDarker p-4 border border-accentGray text-center rounded-lg min-h-fit grid grid-rows-my_rows gap-2 md:min-h-fit md:h-[unset]"
    >
      <img
        className="bg-textWhite rounded-lg w-[130px] flex h-[130px] m-auto"
        src={cover}
        alt={title}
      />
      <span>
        {title.length > 15 ? (
          <marquee scrollamount='2' width={100} className="text-accentGold text-[1rem] font-bold m-auto">{title}</marquee>
        ) : (
          <h3 className="text-accentGold text-[1rem] font-bold">{title}</h3>
        )}
        <p className="text-textWhite text-[0.9rem]">{artist[0].name}</p>
      </span>
    </Link>
  );
};
export default SingleAlbum;
