# Change Log

## Navigate Between Pages

### pages in nextjs

#### 🐻 Steps:

1. Create the posts directory under pages.

2. Create a file called `first-post.js` inside the posts

3. The component can have any name, but you must export it as a default export.

#### 📜 Notes:

💰 Simply create a JS file under the pages directory, and the path to the file becomes the URL path.

💰 In a way, this is similar to building websites using HTML or PHP files.

💰 Instead of writing HTML you write JSX and use React Components.


### Link Component

#### 🐻 Steps:

1. import the Link component from `next/link`

2. change title and add link to `/posts/first-page`

3. add back-to-home link at `FirstPost` page

#### 📜 Notes:

💰 When linking between pages on websites, you use the `<a>` HTML tag.

💰 In Next.js, you use the Link Component from `next/link` to wrap the `<a>` tag.

💰 `<Link>` allows you to do client-side navigation to a different page in the application.

💰 Why using a tag in nextjs Link? short answer for `SEO` https://stackoverflow.com/a/63324886/6483379


### Client-Side Navigation

#### 📜 Notes:

💰 The `Link` component enables `client-side navigation` between two pages in the same Next.js app.

💰 Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

💰 Here’s a simple way you can verify it:

  1. Use the browser’s developer tools to change the `background` CSS property of `<html>` to `yellow`.
  2. Click on the links to go back and forth between the two pages.
  3. You’ll see that the yellow background persists between page transitions.

![client side](https://nextjs.org/static/images/learn/navigate-between-pages/client-side.gif)

> This shows that the browser does not load the full page and client-side navigation is working.


#### Code splitting and prefetching

💰 Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

💰 This ensures that the homepage loads quickly even if you have hundreds of pages.
  
💰 Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

💰 Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant! 

💰 Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).

💰 You create routes as files under pages and use the built-in Link component. No routing libraries are required.

>  If you need to link to an external page outside the Next.js app, just use an `<a>` tag without Link. If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag



## Assets, Metadata, and CSS

### Assets

💰 Next.js can serve static assets, like images, under the top-level `public directory`. Files inside `public` can be referenced from the root of the application similar to `pages`.

💰 Unoptimized Image

With regular HTML, you would add your profile picture as follows:

```html
<img src="/images/profile.jpg" alt="Your Name" />
```

- However, this means you have to manually handle:

- Ensuring your image is responsive on different screen sizes

- Optimizing your images with a third-party tool or library

- Only loading images when they enter the viewport

- And more. Instead, Next.js provides an Image component out of the box to handle this for you.

💰 Image Component and Image Optimization

- `next/image` is an extension of the HTML `<img>` element

- Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. 

- Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions

- Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

### Third-Party JavaScript

`Third-party JavaScript` refers to any scripts that are added from a third-party source. Usually, third-party scripts are included in order to introduce newer functionality into a site that does not need to be written from scratch, such as analytics, ads, and customer support widgets.


In addition to metadata, scripts that need to load and execute as soon as possible are usually added within the <head> of a page. Using a regular HTML `<script>` element, an external script would be added as follows:

```javaScript

<Head>
  <title>First Post</title>
  <script src="https://connect.facebook.net/en_US/sdk.js" />
</Head>

```

Although this approach works, including scripts in this manner does not give a clear idea of when it would load with respect to the other JavaScript code fetched on the same page. 

If a particular script is render-blocking and can delay page content from loading, this can signficiantly impact performance.


Using the Script Component

`next/script` is an extension of the HTML `<script>` element and optimizes when additional scripts are fetched and executed.


## Styling 

💰 Next.js comes with some styling conventions baked in, and they're pretty good. Because Next.js uses React, you can also use any other mechanism that works with React to style your apps

💰 When it comes to styling, you have `global styles` and `component styles`. 

- For global CSS, you have to import them at the entry point of your `app`, In the _app.jsx you can import any CSS file, and the styles will be global now.

- Now, when you don't want global CSS, Next.js supports css modules. This will scope your CSS, avoiding collisions.

💰 You can import a CSS module file anywhere in your app. To create a CSS module, you have to use a special syntax in the file name `styles.module.css`. 

💰 Next.js has built-in support for [styled-jsx](https://github.com/vercel/styled-jsx), but you can also use other popular CSS-in-JS libraries such as [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components) or [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).

💰 **Writing and Importing CSS**

- Next.js has [built-in support for CSS](https://nextjs.org/docs/basic-features/built-in-css-support) and Sass which allows you to import .css and .scss files.

- Using popular CSS libraries like [Tailwind](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss) CSS is also supported.

> I prefer to use a different solution when styling all my React apps, which we're going to use today.

[theme ui](https://theme-ui.com/) is a library that allows you to create theme objects and use them in your components. It also handles scoping and injecting the CSS into your app—pretty dope stuff.

## Data Fetching – Fetching Data

There are many ways to fetch data with Next.js. Depending on when you need the data and what you're doing with it, you have options.

Let's start with what you already know. You can continue to fetch the data client-side to react the same way you do now. Hooks, fetch, etc.

> 👍🏾&nbsp;&nbsp;**tip**: Next.js injects `fetch` into your environment.

> 👍🏾&nbsp;&nbsp;**tip**: Checkout [swr](https://swr.vercel.app/) and [react-query](https://react-query.tanstack.com/) for your client side data fetching needs.

Now, for fetching data ahead time, we have three options.

`getStaticProps`

`getStaticPaths`

`getServerSideProps`


## Static data
All of these methods are for prerendering Pages only. You cannot use them in components or client-side data fetching. Let's talk about `getStaticProps` on a page.

```jsx
// /pages/index.js

const IndexPage = () => {// jsx }
export default IndexPage

export async function getStaticProps(context) {
  return {
    props: {}
  }
}
```

By having your page export `getStaticPros`, Next.js will run this function at **build time**. Whatever your return as props will be passed into the exported page.

> 🕳 &nbsp;&nbsp;**deep dive**: The results of this function are saved into a JSON file and passed as props to the client's component at runtime.

This function and all other data fetching functions will only ever run on the server. The actual code won't even be bundled with the client code. That means you can do some exciting things here:

* file system work
* connect to a DB
* crawl a website? Yup.

The `context` object is useful when the page is dynamic. The context will contain the value of the params. This function is not run at runtime in the browser, so where do the params come in?

That's where `getStaticPaths` come in.


```jsx
// /pages/blog/:slug.js

const IndexPage = () => {// jsx }
export default IndexPage

export async function getStaticPaths() {
  // get all the paths for your posts from an API
  // or file system
  const results = await fetch('/api/posts')
  const posts = await results.json()
  const paths = posts.map(post => ({params: {slug: 
  post.slug}}))
  /*
  [
    {params: {slug: 'get-started-with-node'}},
    {params: {slug: 'top-frameworks'}}
  ]
  */
  return {paths}
}

export async function getStaticProps({ params }) {
  const res = await fetch(`/api/post/${params.slug}`)
  const post = await res.json()
  return {
    props: {post}
  }
}
```

## Static paths
If a page has a dynamic path `[id].jsx` and uses `getStaticProps`, it must also use `getStaticPaths` to prerender all the pages at build time into HTML.

> 👍🏾&nbsp;&nbsp;**tip**: use `fallback: true` on your return object for `getStaticPaths` if you have a big site and don't want to statically prerender all items at once, and instead opt in to render some later at runtime via SSR.


## Server data
Lastly we have `getServerSideProps`. This will be called at runtime during every request. So unlike `getStaticProps`, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers. 

```jsx
const IndexPage = () => {// jsx }
export default IndexPage

export async function getServerSideProps() {
  const response = await fetch(`https://somedata.com`)
  const data = await response.json()

  return { props: { data } }
}
```
## When to use what

**Do you need data at runtime but don't need SSR?**
Use client-side data fetching.

**Do you need data at runtime but do need SSR?**
Use `getServerSideProps`

**Do you have pages that rely on data that is cachable and accessible at build time? Like from a CMS?**
Use `getStaticProps`

**Do you have the same as above but the pages have dynamic URL params?**
Use `getStaticProps` and `getStaticPaths`




[© NextJS Official website](https://nextjs.org/learn/basics/navigate-between-pages/client-side)
