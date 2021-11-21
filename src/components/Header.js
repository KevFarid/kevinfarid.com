import Head from 'next/head'
import { useRouter } from 'next/router'
import {constants} from '../config/constants'

export default function Header({ title, description, ogType, ogImage }) {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description || constants.language.description} />
      <meta property="og:url" content={`${constants.siteData.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={constants.title} />
      <meta property="og:description" content={description || constants.language.description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="es_ES" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@kevfarid_" />
      <meta name="twitter:creator" content="@kevfarid_" />
    </Head>
  )
}
