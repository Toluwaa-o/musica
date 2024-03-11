import SingleArtist from "./Artist";

export const getArtists = async () => {
  const res = await fetch("http://localhost:3000//api/v1/artists");

  return res.json();
};

const ArtistRowPage = async () => {
  const { artists } = await getArtists();

  return (
    <div className="p-2">
      <h2 className="text-textWhite text-xl font-bold">Top Artists</h2>
      <div className="overflow-scroll grid grid-flow-col p-4 items-center gap-2 auto-cols-[40%] md:auto-cols-[19%]">
        {artists.map((artist) => (
          <SingleArtist key={artist._id} {...artist} />
        ))}
      </div>
    </div>
  );
};
export default ArtistRowPage;
export const revalidate = 3600;
