const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = {
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "url": require.resolve("url"),
    "assert": require.resolve("assert"),
    "buffer": require.resolve("buffer")
  };

  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);
  
  return config;
};
