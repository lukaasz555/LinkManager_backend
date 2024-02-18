import { Schema, Types, model } from 'mongoose';

const schema = new Schema(
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
				id: {
					type: Number,
					required: true,
					unique: true,
				},
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
			},
		],
		links: [
			{
				id: {
					type: Number,
					required: true,
					unique: true,
				},
				title: {
					type: String,
					required: true,
					unique: true,
				},
				url: {
					type: String,
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
				categoryId: {
					type: Number,
					required: true,
					unique: false,
				},
			},
		],
	},
	{ timestamps: true }
);

export const UserModel = model('User', schema);
