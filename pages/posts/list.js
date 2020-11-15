import Fetch from 'node-fetch'

const list = (props) => {
    const { list } = props
    return (
        <div>
            <h2>列表页</h2>
            <ul>
                {
                    (list || []).map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>

    )
}

// 非构建时执行，每次页面路由请求时执行（真正的 ssr）
export async function getServerSideProps(context) {
    console.log('context', context)

    const response = await Fetch('http://localhost:3000/api/posts/list');
    const res = await response.json();
    console.log('2222')
    return {
        props: {
            list: res.result || []
        }
    }
}

export default list;
