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
