const express = require('express')
const next = require('next')
const createProxyMiddleware = require('http-proxy-middleware').createProxyMiddleware

const devProxy = {
    '/yunli': {
        target: 'http://153.35.118.69:7005',
        pathRewrite: {
            '^/yunli': '/yunli'
        },
        changeOrigin: true
    }
}

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        if (dev && devProxy) {
            Object.keys(devProxy).forEach(function (context) {
                server.use(context, createProxyMiddleware(devProxy[context]))
            })
        }

        server.all('*', (req, res) => {
            handle(req, res)
        })

        server.listen(port, err => {
            if (err) {
                throw err
            }
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch(err => {
        console.log('An error occurred, unable to start the server')
        console.log(err)
    })