import PageHeading from "@/components/common/PageHeading";
import Container from "@/components/layouts/partials/Container";
import Guestbook from "@/components/views/guestbook/Guestbook";
import { fetcher } from "@/services/fetcher";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

const GuestbookPage = ({ fallback }) => {
    const t = useTranslations('Guestbook');
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
            <SWRConfig value={{ fallback }}>
                <Container data-aos='fade-up'>
                    <PageHeading
                        title={t('title')}
                        description={t('subtitle')}
                    />
                    <Guestbook />
                </Container>
            </SWRConfig>
        </>
    );
};

export default GuestbookPage;

export const getStaticProps = async () => {
    const messages = await fetcher(`${process.env.NEXT_PUBLIC_SITE_URL}/api/guestbook`);

    return {
        props: {
            fallback: {
                '/api/guestbook': messages,
            },
        },
        revalidate: 1,
    };
};
