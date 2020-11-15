import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>公共title</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>公共头部</header>
            {children}
            <footer className="layout-footer">公共底部</footer>
        </div>
    )
}

export default Layout;