import Details from "@/app/components/Albums/Details";
import Back from "@/app/components/UI/Back";
import PlaylistSongs from "./components/PlaylistSongs";

const Page = async () => {
  return (
    <main className="grid gap-2 bg-bgDarker md:max-h-screen py-4 overflow-scroll relative pb-[15vh] md:pb-[15vh]">
      <span className="md:hidden">
        <Back />
      </span>
      <Details
        album={{
          cover: "/Covers/Liked Songs.jpg",
          title: "Liked Songs",
          description:
            "Curated collection of cherished tunes that have earned a special place in your heart – your go-to playlist for musical delights and fond memories.",
        }}
        isAlbum={true}
      />
      <PlaylistSongs />
    </main>
  );
};
export default Page;
