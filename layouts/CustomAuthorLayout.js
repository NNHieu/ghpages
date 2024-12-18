import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, vietnamese_name, avatar, occupation, company, email, twitter, linkedin, github } =
    frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Home
          </h1>
        </div> */}
        <div className="items-start space-y-2 xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="120px"
              height="120px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4text-1xl font-bold leading-8 tracking-tight">{name}</h3>
            <h4 className="pb-2 text-base font-light tracking-tight">{vietnamese_name}</h4>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {occupation} at {company}
            </div>
            {/* <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
              <SocialIcon kind="github" href={github} size={5} />
              <SocialIcon kind="linkedin" href={linkedin} size={5} />
              <SocialIcon kind="twitter" href={twitter} size={5} />
            </div>
          </div>
          <div className="prose max-w-none pt-4 pb-8 dark:prose-dark xl:col-span-3">{children}</div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-1"></div>
        </div>
      </div>
    </>
  )
}
