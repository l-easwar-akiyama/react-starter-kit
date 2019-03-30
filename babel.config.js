module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, targets: { esmodules: true } }],
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
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};
