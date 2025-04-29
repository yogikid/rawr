import { BiBook, BiBriefcase, BiBuilding, BiCodeAlt, BiCube, BiCustomize, BiGrid, BiGroup, BiLogoFlask, BiPalette, BiPen, BiUser } from "react-icons/bi";

export const PORTFOLIO_CATEGORIES = {
    'all' : {
        classIcon: 'fad fa-grid',
        reactIcon: <BiGrid />,
        slug: 'all',
        label: {
            en: 'All',
            id: 'Semua',
        }
    },
    'code' : {
        classIcon: 'fad fa-code-simple',
        reactIcon: <BiCodeAlt />,
        slug: 'code',
        label: {
            en: 'Code',
            id: 'Kode',
        }
    },
    'uiux' : {
        classIcon: 'fad fa-pen-nib',
        reactIcon: <BiPen />,
        slug: 'uiux',
        label: {
            en: 'UI/UX',
            id: 'UI/UX',
        }
    },
    'design' : {
        classIcon: 'fad fa-palette',
        reactIcon: <BiPalette />,
        slug: 'design',
        label: {
            en: 'Design',
            id: 'Desain',
        }
    },
    'product' : {
        classIcon: 'fad fa-cube',
        reactIcon: <BiCube />,
        slug: 'product',
        label: {
            en: 'Product',
            id: 'Produk',
        }
    },
    'other' : {
        classIcon: 'fad fa-grid-2-plus',
        reactIcon: <BiCustomize />,
        slug: 'other',
        label: {
            en: 'Other',
            id: 'Lainnya',
        }
    }
};

export const PORTFOLIO_TYPES = {
    office: {
        icon: <BiBuilding/>,
        en: "Office Project",
        id: "Proyek Kantor"
    },
    personal: {
        icon: <BiUser/>,
        en: "Personal Project",
        id: "Proyek Pribadi"
    },
    team: {
        icon: <BiGroup/>,
        en: "Team Project",
        id: "Proyek Tim"
    },
    client: {
        icon: <BiBriefcase/>,
        en: "Client Project",
        id: "Proyek Klien"
    },
    open_source: {
        icon: <BiCodeAlt/>,
        en: "Open Source Project",
        id: "Proyek Sumber Terbuka"
    },
    research: {
        icon: <BiLogoFlask/>,
        en: "Research Project",
        id: "Proyek Penelitian"
    },
    academic: {
        icon: <BiBook/>,
        en: "Academic Project",
        id: "Proyek Akademik"
    }
};
