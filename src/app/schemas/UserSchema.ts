import { Schema, model } from 'mongoose';
import { ICategoryDto } from './CategorySchema';

export class UserDto {
	email = '';
	password = '';
}

export interface IUserDto {
	email: string;
	password: string;
	categories: ICategoryDto[];
}

const schema = new Schema<IUserDto>({
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
});

const UserModel = model<IUserDto>('User', schema);
export default UserModel;
