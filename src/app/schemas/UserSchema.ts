import { Schema, model } from "mongoose";

export class UserDto {
  email = "";
  password = "";
}

export interface IUserDto {
  email: string;
  password: string;
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
});

const UserModel = model<IUserDto>("User", schema);
export default UserModel;
