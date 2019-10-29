module.exports = {
  roots: ["./src/"],
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js"]
};
