module.exports = {
  coverageDirectory: '<rootDir>/reports/coverage',
  coverageReporters: ['html'],
  roots: ['<rootDir>/app/'],
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'jest-styled-components',
    'react-testing-library/cleanup-after-each',
  ],
  verbose: true,
};
