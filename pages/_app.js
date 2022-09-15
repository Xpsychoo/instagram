import '../styles/globals.css'
import '../styles/styles.css'
import NavBar from './Components/Common/NavBar'

function MyApp({ Component, pageProps }) {
  return<> <NavBar/> <Component {...pageProps} /></>
}

export default MyApp
