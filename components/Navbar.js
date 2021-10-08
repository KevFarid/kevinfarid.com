import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  console.log(useRouter().asPath)
  return (
    <div className="navbar">
      <div className="logo">
        <Image src="https://i.imgur.com/2IE7z1O.png" alt="kevfarid_" width={50} height={59.76} />
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
        <Link href="/contact">
          <a className={activeRouter('contact')}>Contacto</a>
        </Link>
        <Link href="/cv-kevin-farid-cruz.pdf">
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
