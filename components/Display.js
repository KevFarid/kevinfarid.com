import Image from 'next/image'

import { constants } from '../config/constans'

export default function Display() {
  return (
    <div style={{ background: `url(${constants.imgs.heroBG}) center -500px` }}>
      <div className="blur">
        <div className="title">
          <h1>Hola, soy Kevin Farid Cruz</h1>
          <h2>💻 Frontend Developer</h2>
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
            <Image
              src={constants.icons.github}
              alt="github"
              width={47}
              height={47}
              className="round"
              title="GitHub"
            />
          </div>
          <div className="image">
            <Image
              src={constants.icons.linkedin}
              alt="linkedin"
              width={47}
              height={47}
              className="round"
              title="Linkedin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
