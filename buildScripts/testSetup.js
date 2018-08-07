// This file isn't transpiled so must use ES5

// Register babel to transpile before our tests run
require("babel-register");

//Disable Webpack features the Mocha doesn't understand
require.extensions[".css"] = function() {};
