import { useState } from "react";
import Popup from "./Popup";
import ShareContent from "./ShareContent";
import TechnologyList from "./TechnologyList";

const Toolbar = () => {
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [isLinkCopied, setIsLinkCopied] = useState(false);

    // Function to handle the "Copy Link" button
    const handleCopyLink = () => {
        navigator.clipboard.writeText("https://dwiwijaya.com").then(() => {
            setIsLinkCopied(true);
            setTimeout(() => setIsLinkCopied(false), 2000); // Reset after 2 seconds
        });
    };

    // Function to handle "Share via Email"
    const handleEmailShare = () => {
        const subject = "Check out this website!";
        const body = "I found this awesome website: https://dwiwijaya.com";
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return (
        <div className="toolbar absolute top-5 right-5 flex gap-2">
            {/* Tombol Share */}
            <div className="relative flex gap-2">
                <button
                    className="bg-container px-3 h-10 rounded-lg text-primary border border-stroke"
                    onClick={() => { setShowSharePopup((prev) => !prev), setShowInfoPopup(false) }}
                >
                    <i className="fal fa-up-right-from-square"></i>
                </button>
                <Popup isVisible={showSharePopup} className="">
                    <div className="">
                        {/* Header */}
                        <div className="mb-4">
                            <h3 className="font-bold text-title">Website Personal Saya</h3>
                            <p className="text-sm text-text">Terima kasih sudah mengunjungi ! Yuk, bagikan dengan teman-temanmu.</p>
                        </div>

                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={handleCopyLink}
                                className="text-slate-700 flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200"
                            >
                                <i className={`fal ${isLinkCopied ? "fa-check text-green-500" : "fa-copy text-slate-500"}`}></i>
                                {isLinkCopied ? "Link Tersalin!" : "Bagikan Link"}
                            </button>

                            <button
                                onClick={handleEmailShare}
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 "
                            >
                                <i className="fal fa-envelope text-slate-500"></i>
                            </button>
                        </div>

                        <ShareContent />
                    </div>
                </Popup>
                <button
                    className="bg-container px-3 h-10 rounded-lg text-primary border border-stroke"
                    onClick={() => { setShowInfoPopup((prev) => !prev); setShowSharePopup(false) }}
                >
                    <i className="fal fa-lg fa-microchip"></i>
                </button>
                <Popup isVisible={showInfoPopup}>
                    <div className="">
                        <p className="font-bold text-title mb-2">Teknologi yang dipakai</p>
                        <TechnologyList />
                    </div>

                </Popup>
            </div>

            {/* Tombol Info */}
        </div>
    );
};

export default Toolbar;
