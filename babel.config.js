module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: ['last 2 Chrome versions', 'last 2 ff versions'],
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    development: {
      plugins: [['babel-plugin-styled-components', { ssr: false }], 'react-hot-loader/babel'],
    },
    production: {
      plugins: [['babel-plugin-styled-components', { ssr: false, displayName: false, pure: true }]],
    },
  },
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
};
