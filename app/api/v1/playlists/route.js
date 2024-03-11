import Playlist from "@/models/Playlist";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  await dbConnect();
  const playlists = await Playlist.find().populate({
    path: "songs",
    populate: { path: "artist feature" },
  });

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return NextResponse.json(
    { playlists: shuffle(playlists), success: true },
    { status: 200 }
  );
};
