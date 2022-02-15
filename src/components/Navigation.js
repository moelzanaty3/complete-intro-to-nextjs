/** @jsxImportSource theme-ui */
import Link from 'next/link'

export default function Navigation() {
  return (
    <header sx={{ variant: 'containers.header' }}>
      <nav sx={{ variant: 'containers.nav' }}>
        <Link href="/">
          <a sx={{ variant: 'containers.logo' }}>Note App</a>
        </Link>

        <Link href="/posts">
          <a sx={{ variant: 'containers.navLink' }}>posts</a>
        </Link>
        {/* https://stackoverflow.com/a/61061107/6483379 */}
        <Link
          href="https://www.linkedin.com/in/mohammedelzanaty129/"
          passHref={true}
        >
          <a sx={{ variant: 'containers.navLink' }} target="_blank">
            Help
          </a>
        </Link>
      </nav>
    </header>
  )
}
