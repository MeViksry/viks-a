import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssPresetEnv({
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace'
      },
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true
      }
    })
  ]
};