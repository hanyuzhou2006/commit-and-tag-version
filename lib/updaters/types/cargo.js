const TOML = require('@iarna/toml');
const { replaceTomlValue } = require('../../../util/toml-edit');
module.exports.readVersion = function (contents) {
  return TOML.parse(contents).package.version;
};

module.exports.writeVersion = function (contents, version) {
  return replaceTomlValue(
    contents,
    ['package', 'version'],
    version
  );
};
