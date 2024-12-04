import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Experience from '@/components/views/experience/Experience'
import { fetcher } from '@/services/fetcher';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react'


const ExperiencePage = ({ experience }) => {

    const t = useTranslations('Experience');
    const { locale, asPath } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''

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
            />
            <Container data-aos='fade-up'>
                <PageHeading
                    title={t('title')}
                    description={t('subtitle')}
                />
                <Experience experience={experience} />
            </Container>
        </>
    )
}

export default ExperiencePage
export const getStaticProps = async () => {
    // const readStats = await getReadStats();
    const experience = await fetcher(`${process.env.API_URL}/experience`)

    return {
        props: {
            experience
        },
        revalidate: 1,
    };
};