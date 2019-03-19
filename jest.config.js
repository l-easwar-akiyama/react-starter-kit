module.exports = {
  coverageDirectory: '<rootDir>/reports/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/reports/'],
  coverageReporters: ['html'],
  roots: ['<rootDir>/app/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/reports/'],
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'jest-styled-components',
    'react-testing-library/cleanup-after-each',
  ],
  verbose: true,
};
