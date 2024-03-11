import mongoose from "mongoose";

const Album = new mongoose.Schema({
  title: { type: String, required: true },
  artist: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Artist",
    required: true,
  },
  cover: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

export default mongoose.models.Album || mongoose.model("Album", Album);
