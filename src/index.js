import { SAMPLE_ENV } from "babel-dotenv";
console.log(`Hello ${SAMPLE_ENV}!`);
//NOTE: ^ this will fail unless you change ".env.sample" to ".env"

console.log("live reload works");
