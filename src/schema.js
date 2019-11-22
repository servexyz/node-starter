import { nexusPrismaPlugin } from "nexus-prisma";
import { Photon } from "@generated/photon";
import {
  idArg,
  makeSchema,
  objectType,
  enumType,
  queryType,
  mutationType
} from "nexus";
import * as path from "path";

const TwitterUserMeta = objectType({
  name: "TwitterUserMeta",
  definition(t) {
    t.model.id();
    t.model.twitterId();
    t.model.twitterUsername();
  }
});

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.email();
    t.model.name();
    t.model.twitter();
    t.model.predictions();
  }
});

// --------------------------

const PredictionStatus = enumType({
  name: "PredictionStatus",
  members: ["ACTIVE", "DELETED", "REFUTED"]
});

const Prediction = objectType({
  name: "Prediction",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.start();
    t.model.finish();
    t.model.author();
    t.model.content();
    t.model.assetPair();
    t.model.responses();
    t.model.attributed();
    t.model.status();
  }
});

// --------------------------

const Asset = objectType({
  name: "Asset",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.name();
    t.model.symbol();
    t.model.assetNumerator();
    t.model.currencyDenominator();
  }
});

const AssetPair = objectType({
  name: "AssetPair",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.assetNumerator();
    t.model.currencyDenominator();
    t.model.ratio();
  }
});

// --------------------------

const ResponseStatus = enumType({
  name: "ResponseStatus",
  members: ["UNPARSED", "PARSED", "SENT"]
});

const ResponseType = enumType({
  name: "ResponseType",
  members: ["ACKNOWLEDGMENT", "RESULT", "FAILURE"]
});

const Response = objectType({
  name: "Response",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.sentAt();
    t.model.recipient();
    t.model.type();
    t.model.status();
  }
});

// --------------------------

const Query = queryType({
  definition(t) {
    t.crud.user();
    t.crud.users();
    t.crud.twitterUserMeta();
    t.crud.twitterUserMetas();
    t.crud.prediction();
    t.crud.predictions();
    t.crud.asset();
    t.crud.assets();
    t.crud.assetPair();
    t.crud.assetPairs();
    t.crud.response();
    t.crud.responses();
  }
});
const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.crud.deleteOneUser();
    t.crud.createOneTwitterUserMeta();
    t.crud.updateOneTwitterUserMeta();
    t.crud.deleteOneTwitterUserMeta();
    t.crud.createOnePrediction();
    t.crud.updateOnePrediction();
    t.crud.deleteOnePrediction();
    t.crud.createOneAsset();
    t.crud.updateOneAsset();
    t.crud.deleteOneAsset();
    t.crud.createOneAssetPair();
    t.crud.updateOneAssetPair();
    t.crud.deleteOneAssetPair();
    t.crud.createOneResponse();
    t.crud.updateOneResponse();
    t.crud.deleteOneResponse();
  }
});

// --------------------------

export const photon = new Photon();
export const schema = makeSchema({
  types: [
    Query,
    Mutation,
    TwitterUserMeta,
    User,
    PredictionStatus,
    Prediction,
    Asset,
    AssetPair,
    ResponseStatus,
    ResponseType,
    Response
  ],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(
      __dirname,
      "../node_modules/@types/nexus-prisma-typegen/index.d.ts"
    )
  }
});
// outputs: {
//   typegen: join(__dirname, "/generated/schema.ts"),
//   schema: join(__dirname, "/generated/schema.graphql")
// },

// typegenAutoConfig: {
//   contextType: "Context.Context",
//   sources: [
//     {
//       source: "@generated/photon",
//       alias: "photon"
//     },
//     {
//       source: require.resolve("./context"),
//       alias: "Context"
//     }
//   ]
// }
