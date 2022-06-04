export const getVercelProjects = async (req, res) => {
    const VERCEL_TOKEN = process.env.NEXT_PUBLIC_VERCEL_TOKEN
    console.log(VERCEL_TOKEN)
    /**
    * definir estructura de datos de proyecto
    * {
    * name:string
    * createdAt:string
    * framework: string
    * latestDeployments: array [{
    * alias: array[0]
    * createdAt: number
    * meta: object
    * 
    * }]
    * }
    *
    */
    return fetch('https://api.vercel.com/v9/projects', {
        headers: {
            'Authorization': `Bearer ${VERCEL_TOKEN}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => {
            return res.projects.map(project => {
                const {
                    id,
                    name,
                    createdAt,
                    framework,
                    latestDeployments,
                    link,
                    targets
                } = project
                const url = targets?.production?.url
                const latestDeployment = latestDeployments[0]
                return {
                    id,
                    title: name,
                    createdAt,
                    framework,
                    latestDeployments,
                    latestDeployment,
                    linkOptions: link,
                    url: `http://${url}`,
                    link: `https://${latestDeployment?.alias[0]}`,
                    repository: `https://${link.type}.com/${link.org}/${link.repo}`

                }
            })
        })

    // .then(res => res.data())

}