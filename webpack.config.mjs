import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const task = process.env.npm_lifecycle_event;

const config = {
  mode: 'development',

  module: {
    rules: [
      // REACT AND JS
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },

      // CSS AND SCSS
      {
        test: /\.s?a?c?ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      // IMAGES
      {
        test: /\.(png|svg|jpe?g|mp4)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'src/images/favicon.png',
    }),
  ],

  devServer: {
    port: 3000,

    open: {
      app: {
        name: 'Google Chrome',
      },
    },

    client: {
      logging: 'error',
    },
  },
};

if (task === 'start') config.devtool = 'source-map';

if (task === 'build') {
  config.mode = 'production';

  config.output = {
    filename: 'assets/js/[name].bundle.[fullhash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    clean: true,
  };

  config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
  config.module.rules[1].use[2] = {
    loader: 'postcss-loader',
    options: { postcssOptions: { plugins: ['postcss-preset-env'] } },
  };
  config.module.rules[1].use[3] = 'sass-loader';

  config.plugins = [
    ...config.plugins,
    new MiniCssExtractPlugin({ filename: 'assets/css/[name].styles.[fullhash].css' }),
  ];
}

export default config;
