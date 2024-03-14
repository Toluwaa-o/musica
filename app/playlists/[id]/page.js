import Details from "@/app/components/Albums/Details";
import SongCard from "@/app/components/Songs/SongCard";
import Back from "@/app/components/UI/Back";
import { BASE_URL } from "@/utils/GetUrl";

export const getSongs = async (id) => {
  const res = await fetch(`${BASE_URL}/api/v1/playlists/${id}/songs`);

  return res.json();
};

export const getPlaylist = async (id) => {
  const res = await fetch(`${BASE_URL}/api/v1/playlists/${id}`);

  return res.json();
};

export const generateMetadata = async ({ params: { id } }) => {
  const { playlist } = await getPlaylist(id);

  return {
    title: `${playlist.name} - Musica`,
  };
};

const Page = async ({ params: { id } }) => {
  const [{ songs }, { playlist }] = await Promise.all([
    getSongs(id),
    getPlaylist(id),
  ]);

  return (
    <main className="grid gap-2 bg-bgDarker py-4 md:max-h-screen overflow-scroll relative pb-[15vh] md:pb-[15vh]">
      <span className="md:hidden">
        <Back />
      </span>
      <Details album={playlist} isAlbum={true} />
      <span className="max-h-[100%]">
        {songs.map((song) => (
          <SongCard key={song._id} {...song} songs={songs} />
        ))}
      </span>
    </main>
  );
};
export default Page;
