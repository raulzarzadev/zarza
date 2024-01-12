import JobCard, { Job } from 'comps/JobCard'
import { getVercelProjects } from 'pages/api/vercel'
import { useEffect, useState } from 'react'

const Works = () => {
  // useEffect(() => {
  //   getVercelProjects().then(setVercelProjects)
  // }, [])
  // const [domains, setDomains] = useState([])

  // useEffect(() => {
  //   const VERCEL_TOKEN = process.env.NEXT_PUBLIC_VERCEL_TOKEN
  //   fetch('https://api.vercel.com/v5/domains', {
  //     headers: {
  //       Authorization: `Bearer ${VERCEL_TOKEN}`,
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((res) =>
  //     res.json().then((res) =>
  //       setDomains({
  //         ...res.domains?.map((domain) => {
  //           return {
  //             name: domain.name,
  //             id: domain.id
  //           }
  //         })
  //       })
  //     )
  //   )
  // }, [])
  // const [vercelProjects, setVercelProjects] = useState([])

  const projects: Job[] = [
    {
      id: '1',
      title: 'BajaRent.app',
      description:
        'A personal project to manage my rental properties and items. It is a full stack application built with Next.js, TailwindCSS, Firebase, and Vercel.',
      repositoryURL: 'https://github.com/raulzarzadev/bajarent',
      image: '/images/bajarent.png',
      projectURL: 'https://bajarent.app'
    },
    {
      id: '2',
      title: 'miGranja.app',
      description:
        'A web app design to help lamb farmers better manage their livestock. Its a full stack application built with Next.js, TailwindCSS, Firebase, and Vercel.',
      repositoryURL: 'https://github.com/raulzarzadev/migranja.app',
      image: '/images/miranchito.png',
      projectURL: 'https://migranja.app/'
    },
    {
      id: '3',
      title: 'events.nadamas.com',
      description:
        'A personal project to  publish sport events. It is a full stack application built with Next.js, TailwindCSS, Firebase, and Vercel.',
      repositoryURL: 'https://github.com/raulzarzadev/events.namadas',
      image: '/images/bajarent.png', //* TODO: update
      projectURL: 'https://events.nadamas.app/'
    },
    {
      id: '4',
      title: 'nadamas.app',
      description:
        'A personal project to manage sport teams. Its a full stack application built with Next.js, TailwindCSS, Firebase, and Vercel.',
      repositoryURL: 'https://github.com/raulzarzadev/nadamas',
      image: '/images/nadamas.png',
      projectURL: 'https://nadamas.app/'
    }
  ]
  return (
    <div
      className="bg-slate-500 bg-opacity-50  bg-no-repeat bg-fixed bg-cover min-h-screen w-full mx-auto"
      style={{ backgroundImage: `url(/images/ireland.jpg)` }}
    >
      <h2 className="text-4xl my-10 font-bold text-center text-white">
        Some things I’ve built
      </h2>

      <div className="grid place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {[...projects].map((job) => (
          <div key={job?.id} className="h-full w-full">
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Works
