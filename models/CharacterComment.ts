import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface IComment extends mongoose.Document{
  characterId: number;
  characterName: string;
  username: string;
  comment: string;
}

const commentSchema = new Schema<IComment>({
  characterId: Number,
  characterName: String,
  username: String,
  comment: String,
});

export default mongoose.model("CharacterComment", commentSchema);
