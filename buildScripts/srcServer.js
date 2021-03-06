import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    onInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", function(req, res) {
  //hard coded DB representation
  res.json([
    { id: "1", firstName: "Bobby", lastName: "Smith", email: "test1@test.com" },
    { id: "2", firstName: "Tammy", lastName: "Jones", email: "test2@test.com" },
    { id: "3", firstName: "Tina", lastName: "Brown", email: "test3@test.com" }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
