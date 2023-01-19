const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@API': 'src/API',
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@firebase': 'src/firebase',
    '@redux': 'src/redux',
    '@statics': 'src/statics',
  })(config);
  return config;
};
