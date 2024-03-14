import Details from "@/app/components/Albums/Details";
import SongCard from "@/app/components/Songs/SongCard";
import { BASE_URL } from "@/utils/GetUrl";

export const getArtistSongs = async (id) => {
  const res = await fetch(`${BASE_URL}/api/v1/artists/songs/${id}`);

  return res.json();
};

export const getArtist = async (id) => {
  const res = await fetch(`${BASE_URL}/api/v1/artists/${id}`);

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
    <main className="grid gap-1 bg-bgDarker relative pb-[10vh] md:max-h-[100vh] md:pb-[15vh] overflow-scroll">
      <Details album={artist} />

      <span className="h-[100%] min-h-[30vh]">
        {songs.map((song) => (
          <SongCard key={song._id} {...song} songs={songs} />
        ))}
      </span>
    </main>
  );
};
export default Page;
