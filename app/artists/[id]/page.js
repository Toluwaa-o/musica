import Details from "@/app/components/Albums/Details";
import SongCard from "@/app/components/Songs/SongCard";

export const getArtistSongs = async (id) => {
  const res = await fetch(`https://musica.vercel.app//api/v1/artists/songs/${id}`);

  return res.json();
};

export const getArtist = async (id) => {
  const res = await fetch(`https://musica.vercel.app//api/v1/artists/${id}`);

  return res.json();
};

export const generateMetadata = async ({ params: { id } }) => {
  const { artist } = await getArtist(id);

  return {
    title: `${artist.name} - Musica`,
  };
};

const Page = async ({ params: { id } }) => {
  const [{ songs }, { artist }] = await Promise.all([
    getArtistSongs(id),
    getArtist(id),
  ]);

  return (
    <main className="grid grid-rows-my_rows_2 gap-1 bg-bgDarker h-[90vh] relative pb-[10vh] md:pb-[15vh] md:h-[100vh]">
      <Details album={artist} />

      <span className="overflow-scroll h-[100%] min-h-[30vh]">
        {songs.map((song) => (
          <SongCard key={song._id} {...song} songs={songs} />
        ))}
      </span>
    </main>
  );
};
export default Page;
