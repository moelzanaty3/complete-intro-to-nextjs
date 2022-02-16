/** @jsxImportSource theme-ui */

import React from 'react'
import { useRouter } from 'next/router'

// file => /docs/[...params].jsx
// route => /docs/a/b/c

export default function CatchAll() {
  const router = useRouter()

  // id === ['a', 'b', 'c']
  console.log(router.query.id)
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>hello</h1>
    </div>
  )
}
