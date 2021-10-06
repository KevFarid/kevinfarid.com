import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Image
          src="https://i.imgur.com/2IE7z1O.png"
          alt="kevfarid_"
          width={50}
          height={59.76}
        />
      </div>
      <div className='menu'>
        <a className='select'>Inicio</a>
        <a>Acerca</a>
        <a>Proyectos</a>
        <a>Blog</a>
        <a>Concacto</a>
        <a className='cv' href='/cv-kevin-farid-cruz.pdf' target='_black'>Descargar CV</a>
      </div>
    </div>
  )
}