import { PiCopyright } from "react-icons/pi"

const Footer = () => {
    return (
        <footer className="nav__footer text-left pl-6 flex flex-col gap-1">
            <span className="text-subtext text-sm flex items-center gap-1 whitespace-nowrap">
                <PiCopyright size={15} className="text-primary" />
                {new Date().getFullYear()} Dwi wijaya
            </span>
            <span className="text-subtext text-xs flex items-center gap-1">
                Open Source under GPL License
            </span>
        </footer>
    )
}

export default Footer
