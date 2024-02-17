// import { Schema, model } from 'mongoose';
// import { IUserDto } from './UserSchema';

import { Schema, Types, model } from 'mongoose';

// export class CategoryDto {
// 	id = 0;
// 	color = '';
// 	name = '';
// 	userId = '';
// }

// export interface ICategoryDto {
// 	id: number;
// 	color: string;
// 	name: string;
// 	userId: String;
// 	//user: IUserDto;
// }

// const schema = new Schema<ICategoryDto>({
// 	id: {
// 		type: Number,
// 		required: true,
// 		unique: true,
// 	},
// 	color: {
// 		type: String,
// 		required: true,
// 		unique: false,
// 	},
// 	name: {
// 		type: String,
// 		required: true,
// 		unique: false,
// 	},
// 	userId: {
// 		type: String,
// 		required: true,
// 		unique: false,
// 	},
// });

// export const CategoryModel = model<ICategoryDto>('Category', schema);

const schema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	color: {
		type: String,
		required: true,
		unique: true,
	},
	links: [
		{
			type: Types.ObjectId,
			ref: 'Links',
		},
	],
});

export const Category = model('Category', schema);
