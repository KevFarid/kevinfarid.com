import Image from 'next/image'

import { constants } from '../config/constants'
const lang = constants.language

export default function Display() {
  const sizeIcon = 40

  return (
    <div style={{ background: `url(${constants.imgs.heroBG}) center -500px` }}>
      <div className="hero">
        <div className="title">
          <h1>{lang.title}</h1>
          <h2>{lang.subtitle}</h2>
        </div>
        <div className="image">
          <Image
            src={constants.avatar}
            alt="kevfarid_"
            width={212}
            height={212}
            className="round"
          />
        </div>
        <div className="socialmedia">
          <div className="image">
            <a target="_blank" href={constants.profilesUrls.github}>
              <Image
                src={constants.icons.github}
                alt="github"
                width={sizeIcon}
                height={sizeIcon}
                className="round"
                title="GitHub"
              />
              <p>GitHub</p>
            </a>
          </div>
          <div className="image">
            <a target="_blank" href={constants.profilesUrls.linkedin}>
              <Image
                src={constants.icons.linkedin}
                alt="linkedin"
                width={sizeIcon}
                height={sizeIcon}
                className="round"
                title="Linkedin"
              />
              <p>Linkedin</p>
            </a>
          </div>
          <div className="image">
            <a target="_blank" href={`mailto:${constants.profilesUrls.email}`}>
              <Image
                src={constants.icons.email}
                alt="linkedin"
                width={sizeIcon}
                height={sizeIcon}
                className="round"
                title="Linkedin"
              />
              <p>{lang.componets.hero.writeMe}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
