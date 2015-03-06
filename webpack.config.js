var webpack = require("webpack");
module.exports = {
    watchDelay: 500,
    output: {
        filename: "[name].js",
        sourceMapFilename: 'map/[file].map',
        publicPath: "/js/"
    },
    devtool: '#source-map',
    resolve: {
        modulesDirectories: ["node_modules"],
    },
    module: {
        jshint: {
            //Options to jshint-loader https://github.com/webpack/jshint-loader
        },
        jsx: {
            //Options to jsx-loader https://github.com/petehunt/jsx-loader
        },
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jsxhint-loader'
            }
        ],
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader'},
            { test: /\.async\.js$/, exclude: /node_modules/, loaders: ['react-proxy','jsx-loader'] }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common','common.js'),
        new webpack.optimize.DedupePlugin()
        //new webpack.optimize.AggressiveMergingPlugin()
    ]
};