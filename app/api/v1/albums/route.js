import dbConnect from "@/lib/dbConnect";
import Album from "@/models/Album";
import { NextResponse } from "next/server";

export const GET = async () => {
  await dbConnect();
  const albums = await Album.find().populate("artist");

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return NextResponse.json(
    { albums: shuffle(albums), success: true },
    { status: 200 }
  );
};
