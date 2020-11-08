
const Detail = (props) => {
    console.log('detail props:', props); // 返回 {}
    return (
        <div>
            关于页面详情关于页面详情关于页面详情
        </div>
    )
}

/**
 *  对页面子组件不生效，但也不报错
 */
// export async function getStaticProps(context) {
//     return {
//       props: {
//         name: '详情',
//       },
//     }
//   }

export default Detail;