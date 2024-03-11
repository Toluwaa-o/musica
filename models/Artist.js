import mongoose from "mongoose";

const Artist = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  cover: { type: String, required: true },
});

export default mongoose.models.Artist || mongoose.model("Artist", Artist);
