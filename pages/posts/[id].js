import { useRouter } from 'next/router';
import Fetch from 'node-fetch'

const id = (props) => {
    const { data } = props;
    return (
        <div>
            <p>{data.age}</p>
            <p>{data.sex}</p>
            <p>{data.address}</p>
        </div>
    )
}


export async function getStaticPaths() {
    const response = await Fetch('http://localhost:3000/api/posts/list');
    const res = await response.json();
    const paths = res.result.map(item => {
        return { params: { id: item.id }};
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const response = await Fetch(`http://localhost:3000/api/posts/${params.id}`);
    const res = await response.json();
    return {
        props: {
            data: res.result || {}
        }
    } 
}

// // ssr 获取动态路由
// export async function getServerSideProps({ params }) {
//     const response = await Fetch(`http://localhost:3000/api/posts/${params.id}`);
//     const res = await response.json();
//     return {
//         props: {
//             data: res.result || {}
//         }
//     } 
// }


export default id;
