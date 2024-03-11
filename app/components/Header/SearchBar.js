"use client";
import { useState } from "react";
import Searches from "./Searches";

const SearchBar = () => {
  const [artist, setArtist] = useState(null);

  return (
    <>
      <div className="px-3 ml-auto flex items-center bg-bgDarker border border-accentGold rounded-md md:w-[40%] md:ml-[unset]">
        <input
          className="outline-none bg-transparent md:w-[100%] py-1 text-textWhite md:py-2"
          type="text"
          name="search"
          placeholder="Search artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1.5rem] fill-accentGray"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </div>
      {artist && (
        <Searches artist={artist} clickHandler={() => setArtist("")} />
      )}
    </>
  );
};
export default SearchBar;
