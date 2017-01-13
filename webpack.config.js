module.exports = {
  entry: './index',
  output: {
    path: '.',
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]?[all-loaders]',
  },
  devtool: 'inline-source-map',
};
