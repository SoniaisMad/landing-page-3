import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-3 w-1/2 gap-4 mb-20">
        <img src="/p1.jpg" alt="photo 1" />
        <img src="/p2.jpg" alt="photo 2" />
        <img src="/p3.jpg" alt="photo 3" />
        <img src="/p4.jpg" alt="photo 4" />
        <img src="/p5.jpg" alt="photo 5" />
        <div className="mt-5">
          <h1 className={styles.title}>Jane Doe</h1>
          <h2 className="text-center mt-5 mb-5 " >Professional Photographer</h2>
          <div className="flex flex-row justify-between w-3/4 m-auto">
            <a href="#">
              <img className="h-8 mt-5" src="/twitter.png" alt="twitter icon" />
            </a>
            <a href="#">
              <img className="h-8 mt-5" src="/instagram.png" alt="instagram icon" />
            </a>
            <a href="#">
              <img className="h-8 mt-5" src="/mail.png" alt="mail icon" />
            </a>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
          Made with love, Next.js and Tailwind  
      </footer>
    </div>
  )
}
