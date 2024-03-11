import AlbumRowPage from "./components/Albums/AlbumRow";
import PlaylistRowPage from "./components/Playlists/PlaylistRow";
import SinglesRowPage from "./components/Singles/SinglesRow";
import ArtistRowPage from "./components/Artists/ArtistRow";
import SearchBar from "./components/Header/SearchBar";

export default async function Home() {
  return (
    <main className={`flex flex-col pb-[10vh] md:pb-[15vh] md:p-4 md:gap-4 md:h-screen md:overflow-scroll`}>
      <span className="hidden md:block"><SearchBar /></span>
      <AlbumRowPage />
      <SinglesRowPage />
      <ArtistRowPage />
      <PlaylistRowPage />
    </main>
  );
}
