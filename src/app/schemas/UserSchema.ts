import { Schema, Types, model } from 'mongoose';
import { ICategoryDto } from './CategorySchema';

export class UserDto {
	email = '';
	password = '';
}

export interface IUserDto {
	email: string;
	password: string;
	categories: ICategoryDto[];
	links: ILinkDto[];
}

export interface ILinkDto {
	title: string;
	url: string;
	category: Types.ObjectId | ICategoryDto;
	isFavorite?: boolean;
	notes?: string;
}

const schema = new Schema<IUserDto>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		categories: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Category',
			},
		],
		links: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Link',
			},
		],
	},
	{ timestamps: true }
);

const UserModel = model<IUserDto>('User', schema);
export default UserModel;
