import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'CustomAuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['hieu'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  frontMatter.vietnamese_name = '(Nguyễn Ngọc Hiếu)'
  console.log(mdxSource)

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
