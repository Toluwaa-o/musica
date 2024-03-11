import { BASE_URL } from "@/utils/GetUrl";
import LikedSongs from "./LikedSongs";
import SinglePlaylist from "./Playlist";

export const getPlaylists = async () => {
  const res = await fetch(
    `${BASE_URL}/api/v1/playlists`
  );

  return res.json();
};

const PlaylistRowPage = async () => {
  const { playlists } = await getPlaylists();

  return (
    <div className="p-2">
      <h2 className="text-textWhite text-xl font-bold">Top Playlists</h2>
      <div className="overflow-scroll grid grid-flow-col p-4 items-center gap-4 auto-cols-[55%] md:auto-cols-[15%] md:gap-[10vh]">
        <LikedSongs />
        {playlists.map((playlist) => (
          <SinglePlaylist key={playlist._id} {...playlist} />
        ))}
      </div>
    </div>
  );
};
export default PlaylistRowPage;
export const revalidate = 3600;
