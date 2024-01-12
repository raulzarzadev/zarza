import Head from 'next/head'
import Layout from 'comps/Layout'
import BottomBar from 'comps/Navigation/BottomBar'
import Hello from 'comps/Hello'
import About from 'comps/About'
import Works from 'comps/Works'
import Jobs from 'comps/Jobs'
import Contact from 'comps/Contact'
import Navigation from 'comps/Navigation'

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://dbftdq7i.api.sanity.io/v2023-06-21/data/query/production?query=*%5B_type+%3D%3D+%22work%22%5D'
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err))
  const works = res.result
  return {
    props: {
      works
    }
  }
}
export default function Home(props: { works: any[] }) {
  //console.log(props?.works)
  const SECTIONS = {
    hello: <Hello />,
    // about: <About />,
    // jobs: <Jobs />,
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
      <div className=" bg-violet-200  ">
        {/* <BottomBar sections={sections} /> */}
        <Navigation sections={sections} />
        {sections.map((section) => {
          return (
            <section
              key={section}
              id={section}
              className="min-h-screen flex justify-center items-center"
            >
              {SECTIONS[section as keyof typeof SECTIONS]}
            </section>
          )
        })}
      </div>
      {/* <footer>
       
      </footer> */}
    </>
  )
}

Home.Layout = Layout
