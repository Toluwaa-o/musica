import Details from "@/app/components/Albums/Details";
import SongCard from "@/app/components/Songs/SongCard";
import { BASE_URL } from "@/utils/GetUrl";

export const getSongs = async (id) => {
  const res = await fetch(`${BASE_URL}/api/v1/albums/${id}/songs`);

  return res.json();
};

export const generateMetadata = async ({ params: { id } }) => {
  const { album } = await getSongs(id);

  return {
    title: `${album.title} - Musica`,
  };
};

const Page = async ({ params: { id } }) => {
  const { songs, album } = await getSongs(id);

  return (
    <main className="grid gap-2 bg-bgDarker py-4 relative md:max-h-[100vh] pb-[10vh] md:pb-[15vh] overflow-scroll">
      <Details album={album} isAlbum={true} />
      <span className="min-h-[100%]">
        {songs.map((song) => (
          <SongCard key={song._id} songs={songs} {...song} fromAlbum={true} />
        ))}
      </span>
    </main>
  );
};
export default Page;
