/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2019/9/10
 * ======================================== */

const merge = require('webpack-merge')
const base = require('./webpack.base.config')
// const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
    target: 'node',
    devtool: '#source-map',
    entry: './src/entry-server.js',
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    // externals: nodeExternals({
    //     whitelist: /\.css$/
    // }),
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        //     'process.env.VUE_ENV': '"server"'
        // }),
        new VueSSRServerPlugin()
    ]
})