///////////////////////////////////////////////////////////////////////////////
//        Common configuration for webpack shared by all environments        //
///////////////////////////////////////////////////////////////////////////////

var helpers = require('./helpers');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // Entry points to build bundles from
    // Outputs will be defined in individual environments
    entry: {
        app: './src/main.ts',
        vendors: './src/vendors.ts',
        polyfills: './src/polyfills.ts'
    },

    // Resolution method for imports without extensions.
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            // Typescript files should be loaded by first using the angular2-template-loader
            // then the awesome-typescript-loader will convert to javascript
            // Maybe we can move angualr2-template-loader to preLoaders?? TODO
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: "awesome-typescript-loader",
                        options: { configFileName: helpers.root('src', 'tsconfig.json') }
                    },
                    'angular2-template-loader'
                ]
            },

            // Basic html loader
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            // all css files imported from outside the src/app directory (likely assets/css/*.css imports in app/**/*.module.ts)
            // Should be loaded as a single full style.css
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                // The plugin side of extract text will be different for each env, so will be there in their respective
                // webpack configuration
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
            },
            {
                test: /\.styl$/,
                exclude: helpers.root('src', 'app'),
                // The plugin side of extract text will be different for each env, so will be there in their respective
                // webpack configuration
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap!stylus-loader' })
            },

            // all component scoped styles are to be loaded as raw strings into the javascript
            // These are the styleUrls in components.. angualr2-template-loader will do its job and then this
            // guy will simply load the styles as string into the correct spot
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loaders: 'raw-loader'
            },
            {
                test: /\.styl$/,
                include: helpers.root('src', 'app'),
                loaders: 'raw-loader!stylus-loader'
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
