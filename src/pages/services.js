import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Services from '@/components/views/service/Services'
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react'

const ServicesPage = () => {

    const t = useTranslations('Services');
    const { locale, asPath } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''
    const currentPageURL = `${SITE_URL}${lang}${asPath}`

    return (
        <>
            <NextSeo
                title={`${t('title')} - Dwi Wijaya`}
                description={t('metaDesc')}
                additionalLinkTags={[
                    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${asPath}` },
                    { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${asPath}` },
                    { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${asPath}` },
                ]}
                canonical={currentPageURL}
                openGraph={{
                    url: currentPageURL,
                }}
            />
            <Container data-aos='fade-up'>
                <PageHeading
                    title={t('title')}
                    description={t('subtitle')}
                />
                <Services />
            </Container>
        </>
    )
}

export default ServicesPage
export const getStaticProps = async () => {

    return {
        props: {
        },
    };
};