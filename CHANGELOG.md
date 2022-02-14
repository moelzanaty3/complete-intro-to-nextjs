# Change Log

## Navigate Between Pages: pages in nextjs

### 🐻 Steps:
1. Create the posts directory under pages.

2. Create a file called `first-post.js` inside the posts

3. The component can have any name, but you must export it as a default export.

### 📜 Notes:

💰 Simply create a JS file under the pages directory, and the path to the file becomes the URL path.

💰 In a way, this is similar to building websites using HTML or PHP files.

💰 Instead of writing HTML you write JSX and use React Components.


## Navigate Between Pages: Link Component

### 🐻 Steps:

1. import the Link component from `next/link`

2. change title and add link to `/posts/first-page`

3. add back-to-home link at `FirstPost` page

### 📜 Notes:

💰 When linking between pages on websites, you use the `<a>` HTML tag.

💰 In Next.js, you use the Link Component from `next/link` to wrap the `<a>` tag.

💰 `<Link>` allows you to do client-side navigation to a different page in the application.

💰 Why using a tag in nextjs Link? short answer for `SEO` https://stackoverflow.com/a/63324886/6483379


## Client-Side Navigation

### 📜 Notes:

💰 The `Link` component enables `client-side navigation` between two pages in the same Next.js app.

💰 Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

💰 Here’s a simple way you can verify it:

  1. Use the browser’s developer tools to change the `background` CSS property of `<html>` to `yellow`.
  2. Click on the links to go back and forth between the two pages.
  3. You’ll see that the yellow background persists between page transitions.

![client side](https://nextjs.org/static/images/learn/navigate-between-pages/client-side.gif)

> This shows that the browser does not load the full page and client-side navigation is working.


## Code splitting and prefetching

💰 Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

💰 This ensures that the homepage loads quickly even if you have hundreds of pages.
  
💰 Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

💰 Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant! 

💰 Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).

💰 You create routes as files under pages and use the built-in Link component. No routing libraries are required.

>  If you need to link to an external page outside the Next.js app, just use an `<a>` tag without Link. If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag

[© NextJS Official website](https://nextjs.org/learn/basics/navigate-between-pages/client-side)