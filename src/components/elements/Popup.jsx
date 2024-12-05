// components/Popup.js
import { motion } from "framer-motion";

const Popup = ({ isVisible, children }) => {
    return (
        isVisible && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-[14rem] absolute top-full right-0 mt-2 bg-container shadow-lg border border-stroke rounded-lg p-4 z-10"
            >
                {children}
            </motion.div>
        )
    );
};

export default Popup;
