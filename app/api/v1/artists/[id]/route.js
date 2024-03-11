import dbConnect from "@/lib/dbConnect";
import Artist from "@/models/Artist";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  await dbConnect();
  const artist = await Artist.findOne({ _id: id });

  if (!artist) return notFound();

  return NextResponse.json({ artist, success: true }, { status: 200 });
};
