import { useEffect, useState } from "react";

const BottomBar = ({ sections }) => {

    const [onSection, setOnSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY
            sections.forEach(section => {
                const element = document.querySelector(`#${section}`)
                if (element) {
                    const { top, bottom, height } = element.getBoundingClientRect()

                    if (top <= current > bottom - height) {
                        setOnSection(section)
                    }

                }
            })
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [sections])

    return (
        <div className='flex justify-evenly bg-transparent fixed bottom-0 w-full bg-gradient-to-t from-violet-300 py-5 '>
            {sections.map(section => (
                <div
                    key={section}>
                    <a
                        href={`#${section}`}
                        className={`${onSection === section ? 'bg-violet-500' : 'bg-transparent font-bold'} text-sm hover:bg-gradient-to-l from-green-300  text-white text-center px-4 py-2 rounded-full transition-colors`}
                    >
                        {section?.toUpperCase()}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default BottomBar