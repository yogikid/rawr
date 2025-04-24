import { RiChatDeleteLine, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTelegram2Fill } from 'react-icons/ri'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export const Socials = [
    {
        reactIcon : <MdOutlineAlternateEmail/>,
        background: '#16a34c',
        link: 'https://mailto:hello@dwiwijaya.com',
        eventName: 'Contact: Email',
        label: 'Email',
    },
    {
        reactIcon : <RiInstagramFill size={16}/>,
        background: '#c2410c',
        link: 'https://www.instagram.com/_dwiwijaya_/',
        eventName: 'Social: Instagram',
        label: 'Instagram',
    },
    {
        reactIcon : <RiLinkedinFill size={16}/>,
        background: '#3b82f6',
        link: 'https://www.linkedin.com/in/dwiwijaya/',
        eventName: 'Social: Linkedin',
        label: 'Linkedin',
    },
    {
        reactIcon : <RiGithubFill size={16}/>,
        background: '#000',
        link: 'https://github.com/dwiwijaya',
        eventName: 'Social: Github',
        label: 'Github',
    },
    {
        reactIcon : <RiTelegram2Fill size={16}/>,
        background: '#0088cc',
        link: 'https://t.me/dwiiwijaya',
        eventName: 'Contact: Telegram',
        label: 'Telegram',
    },
]