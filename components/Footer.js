import Image from 'next/image'

import { constants } from '../config/constans'

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contacme</h2>
      <div className="icons">
        <div className="image">
          <Image
            src={constants.icons.github}
            alt="github"
            width={35}
            height={35}
            className="round"
            title="GitHub"
          />
        </div>
        <div className="image">
          <Image
            src={constants.icons.linkedin}
            alt="linkedin"
            width={35}
            height={35}
            className="round"
            title="Linkedin"
          />
        </div>
        <div className="image">
          <Image
            src={constants.icons.email}
            alt="linkedin"
            width={35}
            height={35}
            className="round"
            title="Enviame un correo"
          />
        </div>
      </div>
      <p>Kev Farid • @kevfarid</p>
      <p>Hecho con pasión ❤</p>
    </footer>
  )
}
