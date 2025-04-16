import { RiChatDeleteLine, RiGithubFill, RiGithubLine, RiInstagramFill, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiTelegram2Fill, RiTelegramLine, RiWhatsappLine } from 'react-icons/ri'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { RiTelegram2Line } from "react-icons/ri";

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
        reactIcon : <RiTelegram2Fill size={16}/>,
        background: '#075e54',
        link: 'https://t.me/dwiiwijaya',
        eventName: 'Contact: Telegram',
        label: 'Telegram',
    },
    {
        reactIcon : <RiGithubFill size={16}/>,
        background: '#000',
        link: 'https://github.com/dwiwijaya',
        eventName: 'Social: Github',
        label: 'Github',
    },
]