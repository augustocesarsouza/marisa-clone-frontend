module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/setup-tests.ts'],
  // testEnvironmentOptions: {
  //   //isso foi do MSW test api
  //   customExportConditions: [''],
  // },
  globals: { TextEncoder: TextEncoder, TextDecoder: TextDecoder },
  // setupFilesAfterEnv: ['/app/react-app/jest/setup-tests.js'], Config para Container Docker
};
