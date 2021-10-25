import Image from 'next/image'

import { constants } from '../config/constants'
const lang = constants.language

export default function Footer() {
  return (
    <footer className="footer">
      <h2>{lang.footer.title}</h2>
      <div className="icons">
        <div className="image">
          <Image
            src={constants.icons.github}
            alt="github"
            width={35}
            height={35}
            className="round"
            title={lang.footer.socialMedia.github}
          />
        </div>
        <div className="image">
          <Image
            src={constants.icons.linkedin}
            alt="linkedin"
            width={35}
            height={35}
            className="round"
            title={lang.footer.socialMedia.linkedin}
          />
        </div>
        <div className="image">
          <Image
            src={constants.icons.email}
            alt="linkedin"
            width={35}
            height={35}
            className="round"
            title={lang.footer.socialMedia.email}
          />
        </div>
      </div>
      <p>{lang.myName} • {lang.atsign}</p>
      <p>{lang.footer.finalText}</p>
    </footer>
  )
}
