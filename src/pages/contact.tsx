import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Qiita from '../components/svgs/qiita'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/daigo_suga',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/daigo2010',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img
          src="https://pbs.twimg.com/profile_images/1309615214451548165/wGelDCC8_400x400.jpg"
          alt="Daigo"
          height={60}
        />
      </div>

      <h1 style={{ marginTop: 0 }}>Contact</h1>

      <div className={contactStyles.name}>
        Daigo Suganuma - Web Engineer @{' '}
        <ExtLink href="https://infoselect.net">Infoselect Inc.</ExtLink>
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
