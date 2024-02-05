const CracoLessPlugin = require("craco-less");
const CracoCSSModules = require('craco-css-modules');

module.exports = {
    devServer : {
        port: '8080'
    },
    typescript: {
        enableTypeChecking: true,
    },
    eslint: {
        enable: true,
        mode: 'extends' || 'file',
        configure: (eslintConfig, { env, paths }) => {
          return eslintConfig;
        },
        pluginOptions: (eslintPluginOptions, { env, paths }) => {
          return eslintPluginOptions;
        },
    },
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: {},
              javascriptEnabled: true,
            },
          },
        },
      },
      { plugin: CracoCSSModules }
    ],
}