

import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "comps/Layout";
import { getVercelProjects } from "./api/vercel";
import BottomBar from "comps/Navigation/BottomBar";
import Hello from "comps/Hello";
import About from "comps/About";
import Skills from "comps/Skills";
import Works from "comps/Works";
import Jobs from "comps/Jobs";

export default function Home() {


  const SECTIONS = {
    home: <Hello />,
    about: <About />,
    builds: <Works />,
    jobs: <Jobs />

    // contact: <div>contact</div>,
    // skills: <Skills />,
  }
  const sections = Object.keys(SECTIONS)


  return (
    <>
      <Head>
        <title>Raúl Zarza</title>
      </Head>
      <div className=' bg-violet-200  ' >
        {sections.map(section => {
          return (
            <section key={section} id={section} className='min-h-screen flex justify-center items-center'>
              {SECTIONS[section]}
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
