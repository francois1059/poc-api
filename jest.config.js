/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    collectCoverage : true,
    coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/test/"],
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    verbose: true,
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' } ),
    modulePaths: [
      "<rootDir>"
    ],
    coverageReporters: [
      "text",
      "cobertura"
    ],
};