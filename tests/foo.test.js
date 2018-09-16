import test from "ava";
import { SAMPLE_ENV } from "babel-dotenv";
import { honesty as remoteHonesty } from "npm-starter-sample-module";
import { honesty as localHonesty } from "../npm-starter-sample-module/build/main.js";

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

test("honesty (remote) works", t => {
  t.truthy(remoteHonesty());
});

test("honesty (local) works", t => {
  t.truthy(localHonesty());
});
