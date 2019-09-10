/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2019/9/10
 * ======================================== */

const fs = require('fs')
const path = require('path')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = file => path.resolve(__dirname, file)
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')

let renderer
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
renderer = createBundleRenderer(
    bundle,
    {
        template,
        clientManifest,
        runInNewContext: false,
    }
)

const app = express()
app.use('/dist', express.static(__dirname + '/dist'));

// 在服务器处理函数中……
app.get('*', (req, res) => {
    res.set("Content-Type", "text/html")
    const context = {
        title: 'Vue Ssr 2.3',
        url: req.url
    }
    // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
    // 现在我们的服务器与应用程序已经解耦！
    renderer.renderToString(context, (err, html) => {

        // 处理异常……
        if(err){
            res.status(500).end()
        }

        res.end(html)
    })
})

let server = app.listen(8888,function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("访问地址：为 http://%s:%s",host, port)
});