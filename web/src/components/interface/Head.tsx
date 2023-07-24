import NextHead from 'next/head'

export default function Head() {
  const metatags: MetaDataType = {
    title: 'Todo List',
    description: 'Todo List App with Next.js, Prisma, and TailwindCSS',
    url: 'https://localhost/',
    image: '/web/public/bg-img.jpg',
    type: 'website',
  }

  const { type, title, description, image, url } = metatags

  return (
    <NextHead>
      <meta name="author" content="LuizB" key="author" />

      <title>{metatags.title}</title>
      <meta name="title" content={title} key="title" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="twitter:title" content={title} key="twitter:title" />

      <meta name="description" content={description} key="description" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta
        property="twitter:description"
        content={description}
        key="twitter:description"
      />

      <meta property="og:url" content={url} key="og:url" />
      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="twitter:image" content={image} key="twitter:image" />
    </NextHead>
  )
}
