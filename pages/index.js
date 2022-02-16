/** @jsxImportSource theme-ui */

import Head from 'next/head'
import Link from 'next/link'

import * as utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main sx={{ variant: 'containers.page' }}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="posts/[id]" as={`/posts/${id}`}>
                <a className={utilStyles.listItemTitle}>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
