const metaDescription = 'Dwi Wijaya is a Full-Stack Developer dedicated to creating efficient, scalable, and visually engaging web applications. Passionate about bringing digital visions to life with seamless user experiences.';
const metaSquareImage = 'https://zyhdjqkdvsbxnpngpvkc.supabase.co/storage/v1/object/public/seo/squre-ogimage.png'
const metaImage = 'https://firebasestorage.googleapis.com/v0/b/portfolio-dwiwijaya.appspot.com/o/meta-image.jpg?alt=media&token=45e644b5-1655-40e7-83b6-dc73bf3ecfa6';

const defaultSEOConfig = {
  defaultTitle: 'Dwi Wijaya - Personal Website',
  description: metaDescription,
  openGraph: {
    title: 'Dwi Wijaya - Personal Website',
    description: metaDescription,
    type: 'website',
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
    site_name: 'dwiwijaya.com',
  },
  twitter: {
    handle: '@DwiWijaya',
    site: '@dwiwijaya',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
