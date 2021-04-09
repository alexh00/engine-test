const path = require('path');
const distPath = path.resolve(__dirname, 'deploy');
// const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
    },
    // plugins: [
    //     new DtsBundleWebpack({
    //         name: 'engine',
    //         main: 'dist/lib/Engine.d.ts',
    //         out: '../../bin/engine.d.ts'
    //     })
    // ],
    externals: {
        'pixi.js': 'PIXI'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'index.js',
        path: distPath
    },
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 9000
    }
};