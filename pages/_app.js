import App from 'next/app'
import '../styles/globals.css'
import Layout from '../components/common/layout'

function MyApp({ Component, pageProps }) {
  // pageProps.url = 'www';  // 也可以加进去
  console.log('pageProps', pageProps)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  console.log('appProps:', appProps); // 打印： { pageProps: {} } ， 最先执行即早于页面的静态生成函数（getStaticProps）
  appProps.pageProps.url = 'www';  // 可以加进去
  return { ...appProps }
}


export default MyApp
