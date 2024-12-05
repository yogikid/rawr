import { useState } from "react";
import Popup from "@/components/elements/Popup";
import SocialShare from "./SocialShare";
import TechStack from "./TechStack";

const Toolbar = () => {
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [showInfoPopup, setShowInfoPopup] = useState(false);

    return (
        <div className="toolbar absolute top-5 right-5 flex gap-2">
            {/* Tombol Share */}
            <div className="relative flex gap-2">
                <button
                    className="bg-container px-3 h-10 rounded-lg text-primary border border-stroke"
                    onClick={() => { setShowSharePopup((prev) => !prev), setShowInfoPopup(false) }}
                    aria-label="Share content"
                    data-umami-event="toolbar-share-clicked"
                >
                    <i className="fal fa-up-right-from-square"></i>
                </button>
                <Popup isVisible={showSharePopup} className="">
                    <div className="">
                        <SocialShare />
                    </div>
                </Popup>

                <button
                    className="bg-container px-3 h-10 rounded-lg text-primary border border-stroke"
                    onClick={() => { setShowInfoPopup((prev) => !prev); setShowSharePopup(false) }}
                    aria-label="Show tech stack information"
                    data-umami-event="toolbar-info-techstack-clicked"
                >
                    <i className="fal fa-lg fa-microchip"></i>
                </button>
                <Popup isVisible={showInfoPopup}>
                    <div className="">
                        <TechStack />
                    </div>
                </Popup>
            </div>
        </div>
    );
};

export default Toolbar;
