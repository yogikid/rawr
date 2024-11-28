const metaDescription = 'Dwi Wijaya, Full-Stack Developer, specializes in creating innovative web applications with a focus on seamless user experiences and high performance.';
const metaSquareImage = 'https://zyhdjqkdvsbxnpngpvkc.supabase.co/storage/v1/object/public/seo/squre-ogimage.png'
const metaImage = 'https://firebasestorage.googleapis.com/v0/b/portfolio-dwiwijaya.appspot.com/o/meta-image.jpg?alt=media&token=45e644b5-1655-40e7-83b6-dc73bf3ecfa6';

const defaultSEOConfig = {
  title: 'Dwi Wijaya - Personal Website',
  defaultTitle: 'Dwi Wijaya - Personal Website',
  description: metaDescription,
  openGraph: {
    title: 'Dwi Wijaya - Personal Website',
    description: metaDescription,
    url: 'https://dwiwijaya.com/',
    type: 'profile',
    siteName: 'Dwi Wijaya - Personal Website',
    locale: 'en_US',
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
  ],
};

export default defaultSEOConfig;
