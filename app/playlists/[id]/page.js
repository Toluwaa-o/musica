import Details from "@/app/components/Albums/Details";
import SongCard from "@/app/components/Songs/SongCard";
import Back from "@/app/components/UI/Back";

export const getSongs = async (id) => {
  const res = await fetch(`http://localhost:3000/api/v1/playlists/${id}/songs`);

  return res.json();
};

export const getPlaylist = async (id) => {
  const res = await fetch(`http://localhost:3000//api/v1/playlists/${id}`);

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
    <main className="grid gap-2 bg-bgDarker py-4 h-[90vh] md:h-[100vh] relative pb-[15vh] md:pb-[15vh]">
      <span className="md:hidden">
        <Back />
      </span>
      <Details album={playlist} isAlbum={true} />
      <span className="overflow-scroll max-h-[100%]">
        {songs.map((song) => (
          <SongCard key={song._id} {...song} songs={songs} />
        ))}
      </span>
    </main>
  );
};
export default Page;
