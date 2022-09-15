import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './Components/HomePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="-by Ajay Choudhary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main-sec homePage'>
        <HomePage />
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
