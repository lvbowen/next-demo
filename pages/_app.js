import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  pageProps.url = 'www';
  console.log('pageProps', pageProps)
  return (
    <div className="body">
      <header>公共头部</header>
      <Component {...pageProps} />
      <footer>公共底部</footer>
    </div>
  )
}


export default MyApp
