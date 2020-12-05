const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
          "../../theme.config$": path.join(__dirname, "/semantic-ui/theme.config"),
          "../semantic-ui/site": path.join(__dirname, "/semantic-ui/site")
        }
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 1000000,
            }
        },
        {
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader", "less-loader"]
            }),
            test: /\.less$/
          }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};