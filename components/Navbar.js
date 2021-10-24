import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { constants } from '../config/constans'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src={constants.icons.myIcon} alt="kevfarid_" width={50} height={59.76} />
      </div>
      <div className="menu">
        <Link href="/">
          <a className={activeRouter('')}>Inicio</a>
        </Link>
        <Link href="/about">
          <a className={activeRouter('about')}>Acerca</a>
        </Link>
        <Link href="/projects">
          <a className={activeRouter('projects')}>Proyectos</a>
        </Link>
        <Link href="/blog">
          <a className={activeRouter('blog')}>Blog</a>
        </Link>
        <Link href={constants.profilesUrls.cv}>
          <a className="cv" target="_black">
            Descargar CV
          </a>
        </Link>
      </div>
    </div>
  )
}

const activeRouter = (href) => {
  const route = useRouter()
  const asPath = route.pathname
  const asPathSlit = asPath.split('/')
  return asPathSlit[1] === href ? 'select' : 'no-select'
}
