module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'mjs',
    'ts',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  transformIgnorePatterns: [
    '/src/assets',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
  setupFiles: ['<rootDir>/tests/jest.setup.js'],
}
