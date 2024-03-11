import dbConnect from "@/lib/dbConnect";
import Song from "@/models/Song";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  await dbConnect();

  const songs = await Song.find({ playlist: id })
    .populate("artist")
    .populate("feature")
    .populate("album");

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return NextResponse.json(
    { songs: shuffle(songs), success: true },
    { status: 200 }
  );
};
