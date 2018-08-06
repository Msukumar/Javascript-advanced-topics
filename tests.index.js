const testsContext = require.context("./src", true, /(^index)\.js$/);

testsContext.keys().forEach(testsContext);

const srcContext = require.context("./tests", true, /\.js$/);

srcContext.keys().forEach(srcContext);
