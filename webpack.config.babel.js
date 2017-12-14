//-------------
// Settings
//-------------
const libraryName = 'CX'


// Webpack config for creating libs
const path = require('path')



export default (env) => {

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve('./dist'),
            filename: `${libraryName}.js`,
            libraryTarget: 'umd',
            library: libraryName,
            publicPath: "/dist/",
        },
        externals: {
            'lodash': {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_'
            }
        },
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: require.resolve("babel-loader") }
            ]
        },
        plugins: [
            //ClosureCompiler
        ]
    }
}