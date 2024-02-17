// import { DateTime } from 'luxon';
// import { Link } from '../models/Link';
// import { Schema, model, Types } from 'mongoose';

// export interface ILinkBaseData {
// 	title: string;
// 	url: string;
// 	category: Types.ObjectId;
// 	isFavorite: boolean;
// 	notes: string | null;
// }

// const schema = new Schema<ILinkBaseData>(
// 	{
// 		title: {
// 			type: String,
// 			required: true,
// 		},
// 		url: {
// 			type: String,
// 			required: true,
// 		},
// 		category: {
// 			type: Schema.Types.ObjectId,
// 			ref: 'Category',
// 			required: true,
// 		},
// 		isFavorite: {
// 			type: Boolean,
// 			required: true,
// 		},
// 		notes: {
// 			type: String,
// 			required: false,
// 		},
// 	},

// 	{
// 		timestamps: true,
// 	}
// );

// const LinkModel = model<ILinkBaseData>('Link', schema);
// export default LinkModel;
