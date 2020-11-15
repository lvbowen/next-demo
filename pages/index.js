import Head from 'next/head'
import Link from 'next/link'
import Fetch from 'node-fetch'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home(props) {
  console.log('index props', props)

  const [list, setList] = useState(props.region || []);

  const alertFun = () => {
    alert(123)
  }

  const request = async () => {
    const res = await fetch('/yunli/smartriver/v1/api/region/listByPcode?pCode=1', {
      headers: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiIyNTBmNWQ2MTlmZjExMWVhODdmNjAwMTYzZTAzOWRlOCIsInJhbmRvbSI6MzYzLCJncm91cElkIjoiZWFmZmJjNTE4M2Q1YTJlNGZhZGQwYjE3NTZmOWU3ODMiLCJhcHBJZCI6InNtYXJ0Uml2ZXJUZXN0IiwidXNlcklkIjoiMjUwZjVkNjE5ZmYxMTFlYTg3ZjYwMDE2M2UwMzlkZTgiLCJ1dUlkIjoiMzQzY2VmNDEwYjkzNDgzYmE3MDdlNjAzY2Q0NTRjOGMiLCJpYXQiOjE2MDU0MjgzMjMsInVzZXJuYW1lIjoic3VwZXJtYW4ifQ.LaCZ3MHgIWPGtIERKyRoi96PxNr3UjDHrNWRPebMw9c'
      }
    }).then(res => { return res.json()})
    console.log('客户端res:', res)
    setList(list.concat(res.result));
  }

  const request2 = async () => {
    const res = await fetch('/api/hello').then(res => { return res.json()})
    console.log('next接口:', res)
    
  }

  return (
    <div className={styles.container}>

      <button onClick={request}>发送请求</button>
      <button onClick={request2}>请求next接口</button>
      <div style={{ color: 'blue' }}>
        <Link href="/about">进入 about 页面</Link>
      </div>
      <ul>
        {
          (list || []).map((item, index) => (
              <li key={index}>{item.regionName}</li>
          ))
        }
      </ul>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description} onClick={alertFun}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

 // 此函数在构建时被调用
export async function getStaticProps(context) {
  // http://153.35.118.69:7005/yunli/smartriver/v1/api/region/listByPcode?pCode=1
  const res = await Fetch('http://153.35.118.69:7005/yunli/smartriver/v1/api/region/listByPcode?pCode=1', {
    headers: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiIyNTBmNWQ2MTlmZjExMWVhODdmNjAwMTYzZTAzOWRlOCIsInJhbmRvbSI6MzYzLCJncm91cElkIjoiZWFmZmJjNTE4M2Q1YTJlNGZhZGQwYjE3NTZmOWU3ODMiLCJhcHBJZCI6InNtYXJ0Uml2ZXJUZXN0IiwidXNlcklkIjoiMjUwZjVkNjE5ZmYxMTFlYTg3ZjYwMDE2M2UwMzlkZTgiLCJ1dUlkIjoiMzQzY2VmNDEwYjkzNDgzYmE3MDdlNjAzY2Q0NTRjOGMiLCJpYXQiOjE2MDU0MjgzMjMsInVzZXJuYW1lIjoic3VwZXJtYW4ifQ.LaCZ3MHgIWPGtIERKyRoi96PxNr3UjDHrNWRPebMw9c'
    }
  })
  const response = await res.json();
  console.log('response', response)
  if (response.code == 0) {
    return {
      props: {
        region: response.result || [],
      },
    }
  } else {
    return {
      props: {}
    }
  }
 

}