module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          pages: './src/pages',
          navigation: './src/navigation',
          utils: './src/utils',
          constants: './src/constants',
          rtk: './src/rtk',
          assets: './src/assets',
          schemas: './src/schemas',
          context: './src/context',
        },
      },
    ],
  ],
};
