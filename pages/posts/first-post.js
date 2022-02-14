import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        // strategy controls when the third-party script should load.
        // lazyOnload tells Next.js to load this particular script lazily during browser idle time
        strategy="lazyOnload"
        onLoad={() =>
          // is used to run any JavaScript code immediately after the script has finished loading.
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      {/* <img src="/images/profile.jpg" alt="Your Name" /> */}
      <Image
        src="/images/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
