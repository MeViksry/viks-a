import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const banner = `viks-animation v1.0.0`;

// License banner
export default (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    mode: isProduction ? 'production' : 'development',
    
    entry: {
      'viks': './src/js/viks-animation.js',
      'viks.min': './src/js/viks-animation.js',
      'viks-css': './src/sass/viks-animation.scss',
      'viks-css.min': './src/sass/viks-animation.scss'
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      clean: true,
      library: {
        name: 'VIKS',
        type: 'umd',
        export: 'default'
      },
      globalObject: 'this'
    },

    devtool: isProduction ? 'source-map' : 'eval-source-map',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    browsers: ['> 1%', 'last 2 versions', 'not dead']
                  },
                  modules: false,
                  useBuiltIns: 'usage',
                  corejs: 3
                }]
              ]
            }
          }
        },
        
        {
          test: /\.(scss|sass|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                postcssOptions: {
                  plugins: [
                    ['postcss-preset-env', {
                      autoprefixer: {
                        flexbox: 'no-2009'
                      },
                      stage: 3
                    }]
                  ]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  outputStyle: 'expanded',
                  indentType: 'space',
                  indentWidth: 2
                },
                api: 'modern'
              }
            }
          ]
        }
      ]
    },

    plugins: [
      // Add banner to all files
      new webpack.BannerPlugin({
        banner: banner,
        entryOnly: false
      }),

      new MiniCssExtractPlugin({
        filename: (pathData) => {
          if (pathData.chunk.name === 'viks-css') {
            return 'css/viks.css';
          }
          if (pathData.chunk.name === 'viks-css.min') {
            return 'css/viks.min.css';
          }
          return 'css/[name].css';
        }
      }),

      ...(isProduction && process.env.ANALYZE ? [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: '../stats.html',
          openAnalyzer: false
        })
      ] : [])
    ],

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.min\.js$/,
          terserOptions: {
            parse: {
              ecma: 2020
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
              drop_console: isProduction,
              drop_debugger: isProduction,
              pure_funcs: isProduction ? ['console.log', 'console.info'] : []
            },
            mangle: {
              safari10: true
            },
            format: {  
              ecma: 5,
              comments: /^!|@preserve|@license|@cc_on/i,
              ascii_only: true,
              preamble: `/*! ${banner} */`
            }
          },
          parallel: true,
          extractComments: false
        }),
        
        new CssMinimizerPlugin({
          test: /\.min\.css$/,
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { 
                  removeAll: false,
                  removeAllButFirst: false
                },
                normalizeWhitespace: true,
                colormin: true,
                minifyFontValues: true,
                minifySelectors: true
              }
            ]
          }
        })
      ],
      
      splitChunks: false,
      runtimeChunk: false
    },

    resolve: {
      extensions: ['.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    performance: {
      hints: isProduction ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },

    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    },

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: true,
      port: 9000,
      hot: true,
      open: true,
      watchFiles: ['src/**/*']
    },

    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: [
        '**/node_modules',
        '**/dist',
        '/data/data/**',
        '/data/**',
        '/**'
      ]
    }
  };
};