import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Artist from "@/models/Artist";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const chr = searchParams.get("artist");

  await dbConnect();

  let artists;

  if (chr) {
    artists = await Artist.find({ name: { $regex: chr, $options: "i" } });
  } else {
    artists = await Artist.find();
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledArtists = shuffle(artists).slice(0, 11);

  return NextResponse.json(
    { artists: shuffledArtists, success: true },
    { status: 200 }
  );
};
