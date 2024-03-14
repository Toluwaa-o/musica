import Link from "next/link";

const SingleArtist = ({ name, cover, _id }) => {
  return (
    <Link
      href={`/artists/${_id}`}
      className="text-center rounded-lg min-h-fit grid gap-2"
    >
      <img
        src={cover}
        alt={name}
        className="bg-textWhite rounded-full w-[110px] flex h-[110px] md:w-[150px] md:h-[150px] m-auto"
      />
      {name.length > 14 ? (
        <marquee
          width={100}
          scrollamount="2"
          className="text-textWhite tracking-wider font-bold m-auto"
        >
          {name}
        </marquee>
      ) : (
        <p className="text-textWhite tracking-wider font-bold">{name}</p>
      )}
    </Link>
  );
};
export default SingleArtist;
