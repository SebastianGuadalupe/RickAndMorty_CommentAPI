import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  characterId: {
    type: Number,
    required: "A character id is required",
  },
  username: {
    type: String,
    required: "Username is required!",
    trim: true,
  },
  comment: {
    type: String,
    required: "Comment is required!",
    trim: true,
  },
});

export default mongoose.model("CharacterComment", commentSchema);
