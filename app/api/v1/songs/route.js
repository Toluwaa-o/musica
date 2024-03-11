import Song from "@/models/Song";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  await dbConnect();
  const songs = await Song.find()
    .populate("artist")
    .populate("feature")
    .populate("album");

  return NextResponse.json({ songs, success: true }, { status: 200 });
};
