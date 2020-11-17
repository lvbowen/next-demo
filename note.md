## 使用总结
- 全局样式在 _app.js 中加
- 模块样式命名必须格式： ×××.module.css 
- getStaticProps 等是在服务端执行，会最先执行，然后执行 _app.js, 再执行 pages 组件。_app.js 参数 pageProps 是当前 page 组件 props, 可以在 _app.js 增加属性，然后每个页面组件都可以拿到公共的属性。
- getStaticProps 等只对页面根组件生效，页面子组件不生效；_app.js 的 pageProps 同理也是。
- 动态路由 [id].js 的 id 和路由上的查询字符串都是在 useRouter() 对象的 query 属性中拿，但是动态路由变量名称不能和查询字符串属性相同否则会合并，只有动态路由变量。
- 构建之后的页面在 .next/server/pages 目录下
- 如果使用的是静态生成的预渲染方式，则在构建时（build time）就会执行 getStaticProps，在 .next/server/pages 就会生成对应的 html，如果是服务端渲染（getServerSideProps），则是在每次浏览器请求时生成html而不是构建时.
- getStaticProps、 getServerSideProps 如果使用的本地 api 接口（eg.http://localhost:3000/api/posts/list）, 构建的时候要保证服务启动在即 npm run dev 的开发服务不能断开，否则没法请求而报错。
- 给动态路由使用静态化渲染，构建后 server/pages 下会生成所有的 html 文件，如果使用 ssr 则不会生成 html.

## 分享提纲
- next 使用
    - 安装
    - 目录结构说明
    - 加样式（css/less/sass）
    - 路由和编程式路由
    - 404和错误页面_error.js
    - 获取数据：getStaticProps、getStaticPaths、getServerSideProps
    - next api 接口
    - 实际接口代理转发（开发环境需要）
    - store 的使用（mobx 简单演示下安装）
    - 部署

## 具体
- 接口代理转发： npm run dev2 (之前 npm run dev 起的端口要停掉，用一个就好)

- 部署：两种方式
    - next 部署：npm run build 再 npm run start
    - 结合 express 部署：npm run build 再 npm run start2

- mobx 应用安装： npx create-next-app -e with-mobx  
（模板仓库[https://github.com/vercel/next.js/tree/master/examples](https://github.com/vercel/next.js/tree/master/examples)）

## 官方文档地址
- [https://www.nextjs.cn/docs/getting-started](https://www.nextjs.cn/docs/getting-started)