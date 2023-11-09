import { DateTime } from "luxon";
import { Link } from "../models/Link";
import { Schema, model } from "mongoose";

export interface ILinkBaseData {
  title: string;
  url: string;
  categoriesIds: number[];
  isFavorite: boolean;
  notes: string | null;
  userId: number;
}

const schema = new Schema<ILinkBaseData>(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    categoriesIds: {
      type: [Number],
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    userId: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const LinkModel = model<ILinkBaseData>("Link", schema);
export default LinkModel;
