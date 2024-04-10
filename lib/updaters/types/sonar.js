const versionRegex = /sonar\.projectVersion=(.*)/;

module.exports.readVersion = function (contents) {
  const matches = versionRegex.exec(contents);
  if (matches === null || matches.length !== 2) {
    throw new Error(
      'Failed to read the Version field in your sonar file - is it present?',
    );
  }
  return matches[1];
};

module.exports.writeVersion = function (contents, version) {
  return contents.replace(versionRegex, `sonar.projectVersion=${version}`);
};
