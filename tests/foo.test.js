import test from "ava";
import { SAMPLE_ENV } from "babel-dotenv";
import { auth } from "../src/util.js";

test("foo", t => {
  t.pass();
});

test("bar", async t => {
  const bar = Promise.resolve("bar");

  t.is(await bar, "bar");
});

test("SAMPLE_ENV loads", t => {
  t.is(SAMPLE_ENV, "foobar");
});

test("AWS-SLS-Auther :: Authenticate test", async t => {
  let token = await auth("alechp", "123456");
  console.log(`Token from Ava: ${token}`);
  t.truthy(token);
});
