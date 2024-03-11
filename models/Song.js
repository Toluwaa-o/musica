import mongoose from "mongoose";

const Song = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, required: true },
  link: { type: String, required: true },
  artist: { type: mongoose.Types.ObjectId, required: true, ref: "Artist" },
  feature: { type: [mongoose.Types.ObjectId], ref: "Artist" },
  album: { type: mongoose.Types.ObjectId, ref: "Album" },
  playlist: { type: [mongoose.Types.ObjectId], ref: "Playlist" },
  cover: { type: String },
  releaseDate: { type: Date },
});

export default mongoose.models.Song || mongoose.model("Song", Song);
