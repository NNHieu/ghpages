import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SocialIcon from '@/components/social-icons'

const LayoutWrapper = ({ children }) => {
  const email = 'ngochieutb13@gmail.com'
  const github = 'https://github.com/NNHieu'
  const linkedin = 'https://www.linkedin.com/in/hieunn-uet/'
  const twitter = 'https://x.com/home'

  return (
    <SectionContainer>
      <div className="dark:divide-gray-70 flex h-screen flex-col justify-between divide-y divide-gray-200">
        <header className="flex items-center justify-between py-4">
          <div className="leading-1 flex items-center text-base">
            <div className="leading-1 flex items-center text-base">
              <ThemeSwitch />
              <MobileNav />
            </div>
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <div className="flex space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`}  size={5} />
              <SocialIcon kind="github" href={github}  size={5} />
              <SocialIcon kind="linkedin" href={linkedin}  size={5} />
              <SocialIcon kind="twitter" href={twitter}  size={5} />
            </div> */}
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
