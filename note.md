## 使用总结
- className 字符串类名的方式是不行的
- 全局样式在 _app.js 中加
- 模块样式命名必须格式： ×××.module.css 
- getStaticProps 等是在服务端执行，会最先执行，然后执行 _app.js, 再执行 pages 组件。_app.js 参数 pageProps 是当前 page 组件 props, 可以在 _app.js 增加属性，然后每个页面组件都可以拿到公共的属性。
- getStaticProps 等只对页面根组件生效，页面子组件不生效；