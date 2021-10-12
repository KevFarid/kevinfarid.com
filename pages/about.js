import Image from 'next/image'

export default function About() {
  return (
    <div className="padding-06rem">
      <h1>Sobre mi</h1>
      <div className="grid-about">
        <div className="col-left">
          <div className="center-div">
            <Image
              src="https://avatars.githubusercontent.com/u/51223315?v=4"
              alt="kevfarid_"
              width={212}
              height={212}
              className="round"
            />
          </div>
          <div className="text-center">
            <h2 className="margin-04rem">Kev Farid</h2>
            <p className="margin-04rem">i'm Frontend Developer 👨‍💻</p>
          </div>
        </div>
        <div className="text-justify">
          <h3>¿Quién soy? 🤔</h3>
          <p>
            Soy Desarrollador Frontend. Me encanta el desarrollado de Software. Comence a programar
            a la edad de 12 años en Visual Basic 2008, aunque habia muchos conceptos que no entendia
            le comence a tenerle gusto a teclear. No fue hace dos años que comence a vivir de lo que
            amaba y que siempre me encanto.
          </p>
          <h3>Especialidades 🎨</h3>
          <p>Angular, Git, Javascript, Nodejs, Ionic</p>
          <h3>Aprendiendo 🧩</h3>
          <p>ReactJs, Redux, Sass, Python</p>
          <h3>Trayectoria 🧬</h3>
          <p>
            Tengo dos años de experencia en el desarrollado web con tecnologias como Angular, aunque
            tengo una habilidad de adactarme rapido a otras tecnologias. He trabajo como Freelance
            haciendo proyectos para pequeñas empresas de mi ciudad actual (Bogotá). Actualmente ando
            estudiando Ingeneria de Software y al mismo tiempo mejorando mis habilidades técnicas,
            tambien me propuse a mejorar mi ingles.
          </p>
        </div>
      </div>
    </div>
  )
}
