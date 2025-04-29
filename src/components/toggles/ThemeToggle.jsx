import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (!mounted) return;
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    // Safe default (before mounted) supaya server-client match
    const currentTheme = mounted ? theme : "light";

    return (
        <div className="w-full p-1 bg-background rounded-2xl border border-stroke">
            <label className="relative flex h-10 items-center cursor-pointer">
                <input
                    data-umami-event={`Switch to ${currentTheme === "dark" ? "Light" : "Dark"} Mode`}
                    type="checkbox"
                    className="sr-only peer"
                    checked={currentTheme === "dark"}
                    onChange={toggleTheme}
                />
                <div className="slider bg-background peer-checked:bg-background grid grid-cols-2 rounded-2xl justify-between items-center w-full h-full relative">
                    <span
                        className={`absolute w-1/2 h-full border border-stroke rounded-xl transform ${mounted && 'bg-container'} ${currentTheme === "dark" ? 'right-0 ' : 'left-0 '}`}
                        style={{ content: '""', zIndex: 1 }}
                    />
                    <p className={`z-10 p-3 justify-center leading-4 flex items-center gap-2 text-slate-500 ${currentTheme === 'light' ? '!text-slate-800' : ''}`}>
                        <i className="fad fa-sun-bright"></i>{t("Sidebar.light")}
                    </p>
                    <p className={`z-10 p-3 justify-center leading-4 flex items-center gap-2 text-slate-500 ${currentTheme === 'dark' ? '!text-slate-300' : ''}`}>
                        <i className="fad fa-moon"></i>{t("Sidebar.dark")}
                    </p>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;
