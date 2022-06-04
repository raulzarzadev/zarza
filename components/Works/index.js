import JobCard from "comps/JobCard"
import { getVercelProjects } from "pages/api/vercel"
import { useEffect, useState } from "react"

const Works = () => {
    useEffect(() => {
        getVercelProjects().then(setVercelProjects)
    }, [])
    const [vercelProjects, setVercelProjects] = useState([])
    return (
        <div
            className='bg-slate-500 bg-opacity-50  bg-no-repeat bg-fixed bg-cover min-h-screen w-full mx-auto'
            style={{ backgroundImage: `url(/images/ireland.jpg)` }}
        >
            <h2 className="text-4xl my-10 font-bold text-center">
                Some Things I’ve Built
            </h2>

            <div className="grid place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {[...vercelProjects].map(job => (
                    <div key={job?.id} className='h-full w-full'>
                        <JobCard job={job} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Works