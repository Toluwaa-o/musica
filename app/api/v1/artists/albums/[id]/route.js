import Album from "@/models/Album";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id }}) => {
    await dbConnect()
    const albums = await Album.find({ artist: id }).populate('artist')

    return NextResponse.json({ albums, success: true },{ status: 200 })
}