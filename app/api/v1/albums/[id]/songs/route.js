import dbConnect from "@/lib/dbConnect";
import Album from "@/models/Album";
import Song from "@/models/Song";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  await dbConnect();
  const songs = await Song.find({ album: id })
    .populate("artist")
    .populate("feature")
    .populate('album')
    .sort({ 'order' : 'asc' })
    
  const album = await Album.findOne({ _id: id });

  return NextResponse.json({ songs, album, success: true }, { status: 200 });
};
