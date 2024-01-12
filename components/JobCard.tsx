import Link from 'next/link'

export type Job = {
  id: string
  title: string
  description: string
  repositoryURL: string
  projectURL: string
  image: string
}
const JobCard = ({ job }: { job: Job }) => {
  const {
    description,
    image,
    projectURL = '/',
    repositoryURL = '/',
    title
  } = job

  return (
    <div className="flex bg-base-100 h-[200px] w-full  justify-between p-2">
      <div className=" grid   w-3/4">
        <h4 className="text-xl font-bold p-1 text-center">{title}</h4>
        <p className="text-sm">{description}</p>

        <div className="flex justify-evenly">
          <p>
            <Link href={projectURL}>
              <a target="_blank">site</a>
            </Link>
          </p>
          <p>
            <Link href={repositoryURL}>
              <a target="_blank">repository</a>
            </Link>
          </p>
        </div>
      </div>
      <div
        className="w-1/4  relative  bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  )
}

export default JobCard
