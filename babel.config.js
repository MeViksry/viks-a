export default {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: [
          '> 1%',
          'last 2 versions', 
          'not dead',
          'not ie 11'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3,
      modules: true,
      loose: true,
      bugfixes: true
    }]
  ]
};