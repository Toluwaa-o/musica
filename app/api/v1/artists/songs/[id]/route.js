import Song from "@/models/Song";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Artist from "@/models/Artist";

export const GET = async (request, { params: { id } }) => {
  await dbConnect();
  const artistSongs = await Song.find({ artist: id })
    .populate("artist")
    .populate("feature")
    .populate("album");
  const artistFeatures = await Song.find({ feature: id })
    .populate("artist")
    .populate("feature")
    .populate("album");

  const combinedSongs = [...artistSongs, ...artistFeatures];

  return NextResponse.json(
    { songs: combinedSongs.sort((a, b) => a.order - b.order), success: true },
    { status: 200 }
  );
};
