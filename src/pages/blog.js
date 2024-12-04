import PageHeading from "@/components/common/PageHeading"
import Container from "@/components/layouts/partials/Container"
import Blog from "@/components/views/blog/Blog"
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";


const BlogPage = () => {
    
    const t = useTranslations('Blog');
    const { locale, asPath } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''

    return (
        <>
            <NextSeo
                title={`${t('title')} - Dwi Wijaya`}
                description={t('metaDesc')}
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
                <Blog />
            </Container>
        </>
    )
}

export default BlogPage
export const getStaticProps = async () => {

    return {
        props: {
        },
    };
};