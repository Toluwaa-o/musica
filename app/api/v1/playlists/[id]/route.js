import dbConnect from "@/lib/dbConnect";
import Playlist from "@/models/Playlist";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  await dbConnect();
  const playlist = await Playlist.findOne({ _id: id }).populate({
    path: "songs",
    populate: { path: "artist feature" },
  });

  if (!playlist) return notFound();

  return NextResponse.json({ playlist, success: true }, { status: 200 });
};
