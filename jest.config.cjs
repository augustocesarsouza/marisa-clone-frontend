module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/setup-tests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  // testEnvironmentOptions: {
  //   //isso foi do MSW test api
  //   customExportConditions: [''],
  // },
  globals: {
    TextEncoder: TextEncoder,
    TextDecoder: TextDecoder,
  },

  // setupFilesAfterEnv: ['/app/react-app/jest/setup-tests.js'], Config para Container Docker
};
