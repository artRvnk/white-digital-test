module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
    '@babel/plugin-transform-export-namespace-from',
  ],
}
