import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';
import { getGithubUser } from '@/services/GithubServices';
import { getLeetcode } from '@/services/LeetcodeService';
import Container from '@/components/layouts/partials/Container';
import Dashboard from '@/components/views/dashboard/Dashboard';
import PageHeading from '@/components/common/PageHeading';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';


const DashboardPage = ({ fallback }) => {

    const t = useTranslations('Dashboard');
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
                    <Dashboard leetcodeEndpoint='/api/leetcode' githubEndpoint='/api/github' />
                </Container>
            </SWRConfig>
        </>
    );
};

export default DashboardPage;

export const getStaticProps = async () => {

    const githubContribution = await getGithubUser('personal');
    const leetcodeStats = await getLeetcode();

    return {
        props: {
            fallback: {
                '/api/github': githubContribution?.data,
                '/api/leetcode': leetcodeStats?.data,
            },
        },
        revalidate: 1,
    };
};
