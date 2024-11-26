import { Socials } from '@/constants/data/socials'
import React from 'react'

const HomeSocials = () => {
    return (
        <ul className="flex gap-2 mt-6">
            {Socials.map((social, index) => (
                <li key={index}>
                    <a data-umami-event={`Social - ${social.eventName}`} aria-label={`go to ${social.label}`} href={social.link} target='_blank' className="w-full sm:w-fit justify-center !py-3 flex text-xl text-text hover:text-primary badge items-center group">
                        {/* <i className={`group-hover:-rotate-[10deg] transition-3s fa fa-brands fa-${social.boxIcon}`}></i> */}
                        {social.reactIcon}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default HomeSocials