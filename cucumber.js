const common = `
  --parallel 2
  --format summary
  --format progress-bar
  --format-options ${JSON.stringify({ snippetInterface: "async-await" })}
  --publish-quiet
`;

module.exports = {
  default: `${common}`,
};