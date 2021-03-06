/** @jsxImportSource theme-ui */

import Link from 'next/link'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import * as utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <Head>
        <title>{postData.title}</title>
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}

// will return the possible values for id
// getStaticPaths only runs at build time on server-side.
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
    // https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
  }
}

// will fetch the necessary data for the post
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
