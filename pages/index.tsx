

import Head from "next/head";
import Layout from "comps/Layout";
import BottomBar from "comps/Navigation/BottomBar";
import Hello from "comps/Hello";
import About from "comps/About";
import Works from "comps/Works";
import Jobs from "comps/Jobs";
import Contact from "comps/Contact";

export default function Home() {


  const SECTIONS = {
    home: <Hello />,
    about: <About />,
    jobs: <Jobs />,
    builds: <Works />,
    contact: <Contact />

    // contact: <div>contact</div>,
    // skills: <Skills />,
  }
  const sections: string[] = Object.keys(SECTIONS)


  return (
    <>
      <Head>
        <title>Raúl Zarza</title>
      </Head>
      <div className=' bg-violet-200  ' >
        {sections.map(section => {
          return (
            <section key={section} id={section} className='min-h-screen flex justify-center items-center'>
              {SECTIONS[section as keyof typeof SECTIONS]}
            </section>
          )
        })}
      </div>
      <footer>
        <BottomBar sections={sections} />
      </footer>
    </>
  )
}

Home.Layout = Layout
