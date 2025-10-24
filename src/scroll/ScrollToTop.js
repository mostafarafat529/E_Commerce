import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react'
import "./scroll.css"
const ScrollToTop = () => {
const [visible, setVisible] = useState(false);

useEffect(() => {
const toggleVisibility = () => {
    if (window.scrollY > 300) {
    setVisible(true);
    } else {
    setVisible(false);
    }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
    window.removeEventListener("scroll", toggleVisibility);
};
}, []);

const scrollToTop = () => {
window.scrollTo({
    top: 0,
    behavior: "smooth", // بيرجع لأعلى بسلاسة
});
};

return (
visible && (
    <button
    onClick={scrollToTop}
    className="scroll-to-top"
    >
    <ArrowUp/>
    </button>
)
);
};

export default ScrollToTop