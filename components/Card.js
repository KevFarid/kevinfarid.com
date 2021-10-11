import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

export default function Card({ title, img, desc, lastUpdate, by, slug, type }) {
  return (
    <div className="projectcard">
      <article>
        <div className="card-header">
          <div className="image">
            <Image
              src={img}
              alt={title}
              width={348}
              height={183}
              objectFit="none"
              className="rounded-top"
            />
          </div>
        </div>
        <div className="card-content padding-06rem">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="card-footer padding-06rem">
          {isPost(type, by, lastUpdate)}
          <div className="button">
            <Link href={`/${type}/${slug}`}>
              <button>Ver más</button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

const formatDate = (date) => {
  return `Hace: ${moment(date, 'DDMMYYYY').fromNow()}`
}

const isPost = (type, by, lastUpdate) => {
  if (type === 'blog')
    return (
      <>
        <span className="autor">Por: {by}</span>
        <span className="time">{formatDate(lastUpdate)}</span>
      </>
    )
}
