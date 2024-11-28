import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Contact from '@/components/views/contact/Contact'
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router';
import React from 'react'

const ContactPage = () => {

  const t = useTranslations('Contact');
  const { locale, asPath } = useRouter();
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const lang = locale == 'en' ? '/en' : ''

  return (
    <>
      <NextSeo
        title={`${t('title')} - Dwi Wijaya`}
        description={t('metaDesc')}
        canonical={SITE_URL + lang + asPath}
        additionalLinkTags={[
          { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${asPath}` },
          { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${asPath}` },
          { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${asPath}` },
        ]}
      />
      <Container data-aos='fade-up'>
        <PageHeading
          title={t('title')}
          description={t('subtitle')}
        />
        <Contact />
      </Container>
    </>
  )
}

export default ContactPage
export const getStaticProps = async () => {

  return {
    props: {
    },
  };
};