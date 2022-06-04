import JobCard from "comps/JobCard"
import { getVercelProjects } from "pages/api/vercel"
import { useEffect, useState } from "react"

const Works = () => {
    useEffect(() => {
        getVercelProjects().then(setVercelProjects)
    }, [])
    const [vercelProjects, setVercelProjects] = useState([])
    return <div className="grid place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {[...vercelProjects].map(job => (
            <div  key={job?.id} className='h-full w-full'>
                <JobCard job={job} />
            </div>
        ))}
    </div>
}
export default Works