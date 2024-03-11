import mongoose from "mongoose";

const Playlist = mongoose.Schema({
  title: { type: String, required: true },
  songs: { type: [mongoose.Types.ObjectId], required: true, ref: "Song" },
  cover: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

export default mongoose.models.Playlist || mongoose.model("Playlist", Playlist);
