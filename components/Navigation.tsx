import { useEffect, useState } from 'react'

type NavigationProps = {
  sections: string[]
}

const Navigation = ({ sections }: NavigationProps) => {
  const [onSection, setOnSection] = useState('home')
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      sections.forEach((section) => {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const { top, bottom, height } = element.getBoundingClientRect()

          // if (top <= current > bottom - height) {
          if (top <= current || current > bottom - height) {
            setOnSection(section)
          }
        }
      })
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  return (
    <div className="sticky top-0 flex w-full justify-between p-4 bg-transparent bg-gradient-to-l  from-violet-300 z-10">
      {sections.map((section) => (
        <div key={section} className="">
          <a
            href={`#${section}`}
            className={`${
              onSection === section
                ? 'bg-violet-500'
                : 'bg-transparent font-bold'
            } text-sm hover:bg-gradient-to-l  from-green-300  text-white text-center px-2 py-2 rounded-full transition-colors`}
          >
            {section?.toUpperCase()}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Navigation
