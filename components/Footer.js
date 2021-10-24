import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contacme</h2>
      <div className="icons">
        <div className="image">
          <Image
            src="https://i.imgur.com/IDzgJgj.png"
            alt="github"
            width={35}
            height={35}
            className="round"
            title="GitHub"
          />
        </div>
        <div className="image">
          <Image
            src="https://i.imgur.com/z5abyyx.png"
            alt="linkedin"
            width={35}
            height={35}
            className="round"
            title="Linkedin"
          />
        </div>
        <div className="image">
          <Image
            src="https://i.imgur.com/T7Zqh03.png"
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
