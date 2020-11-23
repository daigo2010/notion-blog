import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  {
    label: 'Home',
    link:
      'https://www.notion.so/Daigo-Suganuma-f584ad52393a491a86ba11ac69da3824',
  },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} |` : ''} Daigo's Engineering Blog
        </title>
        <meta name="description" content="Daigo's Engineering Blog" />
        <meta name="og:title" content="Daigo's Engineering Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
