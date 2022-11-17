import type { Config } from "@jest/types";

require("dotenv").config({
  path: ".env",
});
require("dotenv").config({
  path: ".env.tests",
});
require("dotenv").config({
  path: ".env.secrets",
});

const config: Config.InitialOptions = {
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
};

export default config;
