import Image from 'next/image'

import { constants } from '../config/constants'
const lang = constants.language

export default function Footer() {
  return (
    <footer className="footer">
      <h2>{lang.footer.title}</h2>
      <div className="icons">
        <div className="image">
          <a target="_blank" href={constants.profilesUrls.github}>
            <Image
              src={constants.icons.github}
              alt="github"
              width={35}
              height={35}
              className="round"
              title={lang.footer.socialMedia.github}
            />
          </a>
        </div>
        <div className="image">
          <a target="_blank" href={constants.profilesUrls.linkedin}>
            <Image
              src={constants.icons.linkedin}
              alt="linkedin"
              width={35}
              height={35}
              className="round"
              title={lang.footer.socialMedia.linkedin}
            />
          </a>
        </div>
        <div className="image">
          <a target="_blank" href={`mailto:${constants.profilesUrls.email}`}>
            <Image
              src={constants.icons.email}
              alt="linkedin"
              width={35}
              height={35}
              className="round"
              title={lang.footer.socialMedia.email}
            />
          </a>
        </div><div className="image">
          <a target="_blank" href={constants.profilesUrls.twitter}>
            <Image
              src={constants.icons.twitter}
              alt="linkedin"
              width={35}
              height={35}
              className="round"
              title={lang.footer.socialMedia.twitter}
            />
          </a>
        </div>
      </div>
      <p>
        {lang.myName} • {lang.atsign}
      </p>
      <p>{lang.footer.finalText}</p>
    </footer>
  )
}
