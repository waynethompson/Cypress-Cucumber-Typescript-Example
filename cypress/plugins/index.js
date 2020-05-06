const webpack = require("@cypress/webpack-preprocessor");

module.exports = on => {
  const options = {
    webpackOptions: require("../webpack.config.js")
  };
  on("file:preprocessor", webpack(options));
};

/*
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
*/