import { authenticate } from "aws-sls-auther";

export async function auth() {
  let token = await authenticate("alechp", "123456");
  console.log(`Token from Ava: ${token}`);
}
