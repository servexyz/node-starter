import { test } from "ava";
import { authenticate, isAuthorized } from "aws-sls-auther";

test("Authenticate works", async t => {
  let token = authenticate("alechp", "123456");
  t.truthy(token);
});
