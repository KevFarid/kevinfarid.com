import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import PropTypes from 'prop-types'

import { constants } from '../config/constants'
const lang = constants.language

export default function Card({ title, img, desc, lastUpdate, by, slug, type }) {
  return (
    <div className="card">
      <div>
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
              <button>{lang.componets.card.more}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const formatDate = (date) => {
  return `${lang.componets.card.lastUpdate}: ${moment(date, 'DDMMYYYY').fromNow()}`
}

const isPost = (type, by, lastUpdate) => {
  if (type === 'blog')
    return (
      <>
        <span className="autor">{lang.componets.card.by}: {by}</span>
        <span className="time">{formatDate(lastUpdate)}</span>
      </>
    )
}

Card.prototypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  lastUpdate:PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}