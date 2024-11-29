import Email from '@/assets/socials/email.svg'
import Instagram from '@/assets/socials/instagram.svg'
import Linkedin from '@/assets/socials/linkedin.svg'
import Github from '@/assets/socials/github.svg'
import Whatsapp from '@/assets/socials/whatsapp.svg'
import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiWhatsappLine } from 'react-icons/ri'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export const Socials = [
    {
        icon: Email,
        reactIcon : <MdOutlineAlternateEmail/>,
        boxIcon: 'circle-envelope',
        background: '#16a34c',
        link: 'mailto:hello@dwiwijaya.com',
        eventName: 'Contact: Email',
        label: 'Email',
    },
    {
        icon: Instagram,
        reactIcon : <RiInstagramLine/>,
        boxIcon: 'instagram',
        background: '#c2410c',
        link: 'https://www.instagram.com/_dwiwijaya_/',
        eventName: 'Social: Instagram',
        label: 'Instagram',
    },
    {
        icon: Linkedin,
        reactIcon : <RiLinkedinLine/>,
        boxIcon: 'linked-in',
        background: '#3b82f6',
        link: 'https://www.linkedin.com/in/dwi-wijaya/',
        eventName: 'Social: Linkedin',
        label: 'Linkedin',
    },
    {
        icon: Whatsapp,
        reactIcon : <RiWhatsappLine/>,
        boxIcon: 'whatsapp',
        background: '#075e54',
        link: 'https://wa.me/6287700304010',
        eventName: 'Contact: Whatsapp',
        label: 'Whatsapp',
    },
    {
        icon: Github,
        reactIcon : <RiGithubLine/>,
        boxIcon: 'github',
        background: '#000',
        link: 'https://github.com/dwiwijaya',
        eventName: 'Social: Github',
        label: 'Github',
    },
]