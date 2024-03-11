import { BASE_URL } from "@/utils/GetUrl";
import SingleAlbum from "./Album";

export const getAlbums = async () => {
  const res = await fetch(`${BASE_URL}/api/v1/albums`);

  return res.json();
};

const AlbumRowPage = async () => {
  const { albums } = await getAlbums();

  return (
    <div className="p-2">
      <h2 className="text-textWhite text-xl font-bold">Top Albums</h2>
      <div className="overflow-scroll grid grid-flow-col p-4 md:items-center gap-4 auto-cols-[52%] md:auto-cols-[15%] md:gap-[10vh]">
        {albums.map((album) => (
          <SingleAlbum key={album._id} {...album} />
        ))}
      </div>
    </div>
  );
};
export default AlbumRowPage;
export const revalidate = 3600;
