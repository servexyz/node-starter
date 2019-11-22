// const { Photon } = require("@generated/photon");
// const photon = new Photon();
const { photon } = require("./schema");
const moment = require("moment");

(async function main() {
  const user = await photon.users.create(
    {
      data: {
        name: "Alec HP",
        email: "me@alechp.com",
        twitter: {
          create: {
            twitterId: "777008576",
            twitterUsername: "alechp"
          }
        }
      }
    },
    "{ id }"
  );

  const assetXBT = await photon.assets.create({
    data: {
      name: "Bitcoin",
      symbol: "XBT"
    }
  });

  const assetUSD = await photon.assets.create({
    data: {
      name: "Dollar",
      symbol: "USD"
    }
  });

  const assetPair = await photon.assetPairs.create({
    data: {
      assetNumerator: {
        connect: {
          id: assetXBT.id
        }
      },
      assetDenominator: {
        connect: {
          id: assetUSD.id
        }
      },
      ratio: "7614.15"
    }
  });

  const predictions = await photon.predictions.create({
    data: {
      start: moment(),
      finish: moment().add(1, "days"),
      author: {
        connect: {
          id: user.id
        }
      },
      content: "$XBT up 5% in 1 day",
      assetPair: {
        connect: {
          id: assetPair.id
        }
      },
      responses: {
        create: {
          sentAt: moment().add(30, "seconds"),
          recipient: {
            connect: {
              id: user.id
            }
          },
          type: "ACKNOWLEDGMENT",
          status: "UNPARSED"
        }
      },
      attributed: false,
      status: "ACTIVE"
    }
  });
})();
