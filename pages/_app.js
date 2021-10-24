import Layout from '../components/Layaut'
import '../styles/main.scss'

import '../config/constans'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
