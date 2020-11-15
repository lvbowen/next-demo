import { useRouter } from 'next/router';
import Fetch from 'node-fetch'
import Detail from '../components/about/detail';

const about = (props) => {
  const router = useRouter();
  console.log('about router', router)

  const linkTo = () => {
    // router.push('/posts/list');
    router.push({
      pathname: '/posts/list',
      query: {
        a: '1'
      }
    })
  }

  const linkTo2 = () => {
    router.push('/posts/1?id=2');
    
  }
    return (
        <div>
            <h2>About</h2>
            <div>
              <button onClick={linkTo}>进入 post 列表页面</button>
            </div>
            <div>
              <button onClick={linkTo2}>进入 post 详情页面</button>
            </div>
            <p className="p">aboutaboutabout</p>
            <style jsx>
              {
                `
                .p {
                  color: blue;
                  font-size: 20px;
                }
                `
              }
            </style>
            <style global jsx>
              {
                `
                body {
                  background: green;
                }
                `
              }
            </style>
            <Detail />
        </div>
    )
}

export async function getStaticProps() {
    return {
      props: {
        name: '关于',
        path: '/about'
      },
    }
  }

export default about;