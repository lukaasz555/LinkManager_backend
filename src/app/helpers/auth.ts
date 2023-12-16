import bcrypt from "bcrypt";

export async function getHashedPassword(
  password: string
): Promise<string | boolean> {
  const saltRounds = 10;

  return await bcrypt
    .hash(password, saltRounds)
    .then((hashedPassword) => hashedPassword)
    .catch((e) => {
      console.log(e);
      return false;
    });
}

export async function validatedPassword(
  password: string,
  userPassword: string
) {
  return await bcrypt.compare(password, userPassword);
}
