

const about = () => {
    return (
        <div>about </div>
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