
import Head from 'next/head'
import Image from 'next/image'

import Sidebar from "../components/Sidebar"

const Home = () => {
  //flex min-h-screen flex-col items-center justify-center py-2

  return (
    <div className=""> 
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main>
        {/* sidebar */}
        <Sidebar />
        {/* conter */}
      </main>

      {/* player */}
    </div>
  )
}

export default Home
