import Detail from '../components/about/detail';

const about = () => {
    return (
        <div>
            <h2>About</h2>
            <Detail />
        </div>
    )
}

export async function getStaticProps(context) {
    console.log('context', context)
    return {
      props: {
        name: '关于',
        path: '/about'
      },
    }
  }

export default about;