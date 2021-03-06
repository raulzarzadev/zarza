import Link from "next/link"
import { useEffect, useState } from "react"
import { format } from "./utils/dates"

const JobCard = ({ job = {} }) => {

    const [pageData, setPageData] = useState({})
    useEffect(() => {
        // page_scan().then(res => console.log(res))
        fetch(`/api/scan?url=${url}`)
            .then((res) => res.json())
            .then((res) => setPageData(res))
    }, [url])

    const { description, icon, title: pageTitle } = pageData
    const { title = '', link = '', repository = '', image, latestDeployment, url } = job
    return (
        <div className="flex bg-base-100 h-[200px] w-full  justify-between p-2">
            <div className=' grid   w-3/4' >
                <h4 className='text-xl font-bold p-1 text-center'>{pageTitle}</h4>
                <p className='text-sm'>
                    {description}
                </p>
                <p className='text-sm font-thin'>
                    last deploy: {format(latestDeployment?.createdAt, 'dd MMM yy')}
                </p>
                <div className='flex justify-evenly'>
                    <p>
                        <Link href={url}>
                            <a target='_blank' >site</a>
                        </Link>
                    </p>
                    <p>
                        <Link href={repository} >
                            <a target='_blank'>repository</a>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="w-1/4 border relative  bg-no-repeat bg-contain bg-center" style={{ backgroundImage: `url(${icon})` }}>
            </div>

        </div>
    )
}

export default JobCard