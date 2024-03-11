import dbConnect from "@/lib/dbConnect";
import Album from "@/models/Album";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  await dbConnect();
  const album = await Album.findOne({ _id: id }).populate("artist");

  if (!album) return notFound();

  return NextResponse.json({ album, success: true }, { status: 200 });
};
