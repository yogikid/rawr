import React from "react";

const socialMediaData = [
    { name: "Facebook", url: "https://facebook.com/sharer/sharer.php?u=dwiwijaya.com", icon: "fab fa-facebook-f", bgColor: "bg-blue-500" },
    { name: "Twitter", url: "https://twitter.com/intent/tweet?url=dwiwijaya.com", icon: "fab fa-twitter", bgColor: "bg-blue-400" },
    { name: "LinkedIn", url: "https://www.linkedin.com/shareArticle?mini=true&url=dwiwijaya.com", icon: "fab fa-linkedin-in", bgColor: "bg-blue-700" },
    { name: "WhatsApp", url: "https://api.whatsapp.com/send?text=dwiwijaya.com", icon: "fab fa-whatsapp", bgColor: "bg-green-500" },
    { name: "Telegram", url: "https://t.me/share/url?url=dwiwijaya.com", icon: "fab fa-telegram-plane", bgColor: "bg-blue-400" },
    { name: "Line", url: "https://line.me/R/msg/text/?dwiwijaya.com", icon: "fab fa-line", bgColor: "bg-green-600" },
    { name: "Pinterest", url: "https://pinterest.com/pin/create/button/?url=dwiwijaya.com", icon: "fab fa-pinterest-p", bgColor: "bg-red-500" },
    { name: "VK", url: "https://vk.com/share.php?url=dwiwijaya.com", icon: "fab fa-vk", bgColor: "bg-blue-600" },
    { name: "Pocket", url: "https://getpocket.com/edit?url=dwiwijaya.com", icon: "fab fa-get-pocket", bgColor: "bg-red-400" },
    { name: "Weibo", url: "https://service.weibo.com/share/share.php?url=dwiwijaya.com", icon: "fab fa-weibo", bgColor: "bg-purple-500" },
    { name: "Tumblr", url: "https://www.tumblr.com/share/link?url=dwiwijaya.com", icon: "fab fa-tumblr", bgColor: "bg-gray-800" },
    { name: "Instagram", url: "https://www.instagram.com", icon: "fab fa-instagram", bgColor: "bg-pink-500" },
];

const ShareContent = () => {
    return (
        <div className="grid grid-cols-4 gap-3">
            {socialMediaData.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex justify-center items-center w-10 h-10 ${social.bgColor} text-white rounded-md hover:opacity-90`}
                    aria-label={social.name}
                >
                    <i className={social.icon}></i>
                </a>
            ))}
        </div>
    );
};

export default ShareContent;
