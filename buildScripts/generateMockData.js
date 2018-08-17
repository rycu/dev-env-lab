/* eslint-disable no-console */

import jsf from "json-schema-faker";
import chalk from "chalk";
import fs from "fs";
import { schema } from "./mockDataSchema";

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock Data Generated."));
  }
});
