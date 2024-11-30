const metaDescription = 'Dwi Wijaya is a Full-Stack Developer, specializes in building efficient, scalable web & apps with seamless user experiences. Let’s bring your vision to life!';
const metaSquareImage = 'https://zyhdjqkdvsbxnpngpvkc.supabase.co/storage/v1/object/public/seo/squre-ogimage.png'
const metaImage = 'https://firebasestorage.googleapis.com/v0/b/portfolio-dwiwijaya.appspot.com/o/meta-image.jpg?alt=media&token=45e644b5-1655-40e7-83b6-dc73bf3ecfa6';

const getDefaultSEOConfig = (locale) => ({
  title: 'Dwi Wijaya - Personal Website',
  defaultTitle: 'Dwi Wijaya - Personal Website',
  description: metaDescription,
  openGraph: {
    title: 'Dwi Wijaya - Personal Website',
    description: metaDescription,
    url: 'https://dwiwijaya.com/',
    type: 'profile',
    siteName: 'Dwi Wijaya',
    locale: locale === 'id' ? 'id_ID' : 'en_US',
    profile: {
      first_name: 'Dwi',
      last_name: 'Wijaya',
      username: 'dwiwijaya',
    },
    images: [
      {
        url: metaSquareImage,
        alt: 'Dwi Wijaya - og:image',
        width: 600,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'Dwi Wijaya - og:image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'Dwi Wijaya - og:image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'Dwi Wijaya - og:image',
        width: 1600,
        height: 900,
      },
    ],
  },
  twitter: {
    handle: '@DwiWijaya',
    site: '@dwiwijaya',
    title: 'Dwi Wijaya - Personal Website',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'keywords',
      content: 'programer, portfolio, web, developer, personal, design, dwi wijaya, dwiwijaya, developer, backend, fullstack, frontend, ui ux'
    },
    {
      name: 'author',
      content: 'Dwi Wijaya',
    },
    {
      name: 'theme-color',
      content: '#ff774d',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'application-name',
      content: 'Dwi Wijaya',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Dwi Wijaya',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      href: '/favicon/favicon-48.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '180x180',
      href: '/favicon/favicon-180.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
});

export default getDefaultSEOConfig;
