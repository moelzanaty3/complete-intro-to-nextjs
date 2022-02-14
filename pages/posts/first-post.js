/**
 * 🐻 Steps:
 * 1. Create the posts directory under pages.
 * 2. Create a file called first-post.js inside the posts
 * 3. The component can have any name, but you must export it as a default export.
 */
 import Link from 'next/link'

 export default function FirstPost() {
   return (
     <>
       <h1>First Post</h1>
       <h2>
         <Link href="/">
           <a>Back to home</a>
         </Link>
       </h2>
     </>
   )
 }
/**
 * 📜 Notes:
 * Simply create a JS file under the pages directory, and the path to the file becomes the URL path.
 * In a way, this is similar to building websites using HTML or PHP files.
 * Instead of writing HTML you write JSX and use React Components.
 */
