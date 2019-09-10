/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2019/9/10
 * ======================================== */

const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
    entry: {
        app: './src/entry-client.js'
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: function (module) {
        //         return (
        //             /node_modules/.test(module.context) && !/\.css$/.test(module.require)
        //         )
        //     }
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // }),

        // 这是将服务器的整个输出
        // 构建为单个 JSON 文件的插件。
        // 默认文件名为 `vue-ssr-server-bundle.json`
        new VueSSRClientPlugin()
    ]
})