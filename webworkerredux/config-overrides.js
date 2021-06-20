module.exports = function override(config, env) {
  config.optimization.noEmitOnErrors = false,
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: 'worker-loader' }
  })
  config.module.rules.push({
    test: /\.tsx?$/,
    use: { loader: 'awesome-typescript-loader' }
  })
  console.log(config.devServer)
  return config;
}