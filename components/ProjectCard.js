import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({title, img, desc, slug}) {
  return (
    <div className="projectcard">
      <article>
        <div className="image">
          <Image
            src={img}
            alt="kevfarid_"
            width={348}
            height={183}
            objectFit="none"
            className="rounded-top"
          />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className='button'>
          <Link href={`/projects/${slug}`}>
            <button>Ver más</button>
          </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
