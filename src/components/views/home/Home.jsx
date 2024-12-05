import Link from 'next/link'
import React from 'react'
import Profile from '@/assets/avatar-profile.webp'
import HomeSocials from './HomeSocials'
import Image from '@/components/elements/Image'
import Router from 'next/router'
import { useTranslations } from 'next-intl'
import { BiCode, BiCodeAlt } from 'react-icons/bi'

const Home = () => {
    const t = useTranslations('Home');
    return (
        <div className='absolute -top-[175%] w-[calc(100%-40px)] '>
            <div className="flex justify-between gap-2 items-end  mb-8">
                <div className="!min-w-[108px] max-w-[108px] outline outline-[.5rem] outline-background rounded-2xl bg-container">
                    <Image
                        src={Profile}
                        alt='Dwi Wijaya'
                        rounded='rounded-2xl'
                        className=""
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl text-text">
                    Dwi Wijaya
                </h1>
                <div className="flex flex-col">
                    <h2 className="flex items-center gap-2 mb-1 text-text">
                        {t('introduction')} <BiCodeAlt className='text-primary' /> &nbsp;
                    </h2>
                    <p className='text-text text-sm'>
                        {t('passion')} <i className="fal fa-leaf text-primary ml-2"></i>
                    </p>
                </div>
                <div className="flex flex-col ">
                    <p className='text-subtext text-sm'>
                        {t('motto')}<i className="text-primary fal fa-quote-right ml-2"></i>
                    </p>
                    <p className='text-subtext text-sm'>
                        {t('based')}<i className="text-primary fal fa-location-dot ml-2"></i>
                    </p>
                </div>
            </div>
            <HomeSocials />
            <hr className="hr" />
            <div className='card mb-6 !pb-4'>
                <div className='flex gap-3 items-center'>
                    <i className='fad fa-rocket-launch text-primary'></i>
                    <h3 className='text-xl text-title font-medium'>{t('collaboration')}</h3>
                </div>
                <p className='text-subtext mt-2 mb-5'>
                    {t('freelance')}
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => Router.push('/contact')}
                        data-umami-event='Click Get in Touch'
                        aria-label='contact me'
                        className='btn sm:!gap-3 justify-center !w-1/2 sm:!w-fit whitespace-nowrap text-sm sm:text-base !py-3 sm:!py-2'
                    >
                        <i className="fad fa-envelope"></i>{t('getInTouch')}
                    </button>
                    <Link
                        href="https://bit.ly/cv-dwiwijaya"
                        aria-label="resume"
                        data-umami-event='Get Resume'
                        rel="noopener noreferrer"
                        target='_blank'
                        className="btn sm:!gap-3 justify-center !w-1/2 sm:!w-fit whitespace-nowrap text-sm sm:text-base !py-3 sm:!py-2"
                    >
                        <i className="fad fa-file-lines"></i>{t('getResume')}
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Home