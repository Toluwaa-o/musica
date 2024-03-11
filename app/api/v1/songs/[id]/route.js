import dbConnect from "@/lib/dbConnect";
import Song from "@/models/Song";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  await dbConnect();
  const song = await Song.findOne({ _id: id })
    .populate("artist")
    .populate("album")
    .populate("feature");

  if (!song) return notFound();

  return NextResponse.json({ song, success: true }, { status: 200 });
};
