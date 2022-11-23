import { Request, Response } from "express";
import CharacterComment from "../models/CharacterComment"

module.exports = {
  index: async function index(req: Request, res: Response) {
    try {
      const comments = await CharacterComment.find({ characterId: req.params.id });
      res.status(200).json(comments)
    } catch (error) {
      res.status(500).json({ error })
    }
  },
  store: async function (req: Request, res: Response) {
    try {
      await CharacterComment.create({
        characterId: req.params.id,
        characterName: req.body.characterName,
        username: req.body.username,
        comment: req.body.comment,
      });
    } catch (error) {
      console.log(error);
      
      return res.status(500).json({ error })
    }
    res.status(200).json({ message: "Comment created" })
  },
};
