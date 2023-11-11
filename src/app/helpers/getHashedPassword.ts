import bcrypt from "bcrypt";

const saltRounds = 10;

export async function getHashedPassword(
  password: string
): Promise<string | boolean> {
  return await bcrypt
    .hash(password, saltRounds)
    .then((hashedPassword) => hashedPassword)
    .catch((e) => {
      console.log(e);
      return false;
    });
}
