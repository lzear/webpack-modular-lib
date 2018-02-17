const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'mypackagename': path.resolve(__dirname, 'src/index.js'),
      'mypackagename/leftPadMap': path.resolve(__dirname, 'src/leftPadMap.js'),
      'mypackagename/leftPadMapReverse': path.resolve(__dirname, 'src/leftPadMapReverse.js')
    },
  },
};
