import { BiBook, BiBriefcase, BiBuilding, BiCodeAlt, BiCustomize, BiGroup, BiLogoFlask, BiPalette, BiPen, BiUser } from "react-icons/bi";

export const PORTFOLIO_CATEGORIES = {
    code: "Code",
    uiux: "UI-UX",
    design: "Design",
    other: "Other",
};
export const PORTFOLIO_CATEGORIES_ICON = {
    code: <BiCodeAlt/>,
    uiux: <BiPalette/>,
    design: <BiPen />,
    others: <BiCustomize />,
}
export const PORTFOLIO_TYPES = {
    office: "Office Project",
    personal: "Personal Project",
    team: "Team Project",
    client: "Client Project",
    open_source: "Open Source Project",
    research: "Research Project",
    academic: "Academic Project",
}
export const PORTFOLIO_TYPES_ICON = {
    office: <BiBuilding/>,
    personal: <BiUser/>,
    team: <BiGroup/>,
    client: <BiBriefcase/>,
    open_source: <BiCodeAlt/>,
    research: <BiLogoFlask/>,
    academic: <BiBook/>,
}