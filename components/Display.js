import Image from 'next/image'

export default function Display() {
  return (
    <div className='display'>
      <div className='blur'>
        <div className='title'>
          <h1>Hola, soy Kevin Farid Cruz</h1>
          <h2>💻 Frontend Developer</h2>
        </div>
        <div className='image'>
          <Image
            src="https://avatars.githubusercontent.com/u/51223315?v=4"
            alt="kevfarid_"
            width={212}
            height={212}
            className="round"
          />
        </div>
        <div className='socialmedia'>
          <div className='image'>
            <Image
              src="https://i.imgur.com/IDzgJgj.png"
              alt="github"
              width={47}
              height={47}
              className="round"
              title="GitHub"
            />
          </div>
          <div className='image'>
            <Image
              src="https://i.imgur.com/z5abyyx.png"
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