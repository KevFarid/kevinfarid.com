import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { constants } from '../config/constants'
const lang = constants.language

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenuFirstTime, setOpenMenuFirstTime] = useState(false)

  const handleClickMenu = () => {
    setOpenMenuFirstTime(true)
    setOpenMenu(!openMenu)
  }

  const handleClick = () => {
    if(openMenuFirstTime){
      setOpenMenu(false)
    }
  }

  return (
    <div className="navbar">
      <div className="logo">
        <Image src={constants.icons.myIcon} alt="kevfarid_" width={50} height={59.76} />
      </div>
      <div className={`menu ${openMenu ? 'showMenu' : ''} ${openMenuFirstTime ? 'animation-menu-close' : ''}`} onClick={handleClick}>
        <Link href="/">
          <a className={activeRouter('')}>{lang.navbar.home}</a>
        </Link>
        <Link href="/about">
          <a className={activeRouter('about')}>{lang.navbar.about}</a>
        </Link>
        <Link href="/projects">
          <a className={activeRouter('projects')}>{lang.navbar.projects}</a>
        </Link>
        <Link href="/blog">
          <a className={activeRouter('blog')}>{lang.navbar.blog}</a>
        </Link>
        <Link href={constants.profilesUrls.cv}>
          <a className="cv" target="_black">
            {lang.navbar.cvDownload}
          </a>
        </Link>
      </div>
      <div className={`bunger-menu bunger-menu-close ${openMenu ? 'bunger-menu-open' : ''}`} onClick={handleClickMenu}>
        <Image
          src={!openMenu ? constants.icons.menu : constants.icons.close}
          alt="menu"
          width={20}
          height={20}
          className="img"
        />
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
