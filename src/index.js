import { SAMPLE_ENV } from "babel-dotenv";
console.log(`Hello ${SAMPLE_ENV}!`);
import { auth } from "./util.js";

console.log(`\n Index \n ------------- \n`);
auth();
