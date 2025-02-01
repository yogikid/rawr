import { BiBook, BiBriefcase, BiBuilding, BiCodeAlt, BiCustomize, BiGroup, BiLogoFlask, BiPalette, BiPen, BiUser } from "react-icons/bi";

export const PORTFOLIO_CATEGORIES = {
    code: {
        en: "Code",
        id: "Kode"
    },
    uiux: {
        en: "UI-UX",
        id: "UI-UX"
    },
    design: {
        en: "Design",
        id: "Desain"
    },
    product: {
        en: "Product",
        id: "Produk"
    },
    other: {
        en: "Other",
        id: "Lainnya"
    }
};

export const PORTFOLIO_CATEGORIES_ICON = {
    code: <BiCodeAlt/>,
    uiux: <BiPalette/>,
    design: <BiPen />,
    others: <BiCustomize />,
}
export const PORTFOLIO_TYPES = {
    office: {
        en: "Office Project",
        id: "Proyek Kantor"
    },
    personal: {
        en: "Personal Project",
        id: "Proyek Pribadi"
    },
    team: {
        en: "Team Project",
        id: "Proyek Tim"
    },
    client: {
        en: "Client Project",
        id: "Proyek Klien"
    },
    open_source: {
        en: "Open Source Project",
        id: "Proyek Sumber Terbuka"
    },
    research: {
        en: "Research Project",
        id: "Proyek Penelitian"
    },
    academic: {
        en: "Academic Project",
        id: "Proyek Akademik"
    }
};

export const PORTFOLIO_TYPES_ICON = {
    office: <BiBuilding/>,
    personal: <BiUser/>,
    team: <BiGroup/>,
    client: <BiBriefcase/>,
    open_source: <BiCodeAlt/>,
    research: <BiLogoFlask/>,
    academic: <BiBook/>,
}