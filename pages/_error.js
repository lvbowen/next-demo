
// pages/_error.js is only used in production

const Error = ({ statusCode }) => {
    return (
        <div>
            {
               statusCode ? `服务端出错 ${statusCode}` : '客户端出错'
            }
        </div>
    )
}

Error.getInitialProps = async (ctx) => {
    const { res, err } = ctx;
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
}

export default Error;