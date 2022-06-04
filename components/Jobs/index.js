const Jobs = () => {
    return (
        <div>
            <h3 className="text-xl font-bold">
                Where I’ve Worked
            </h3>
            <div className="text-">
                <div className="my-10">
                    <h5 className="font-bold">
                        freelancer
                    </h5>

                    <p className="text-sm">
                        jun 2018 - current
                    </p>

                    <p
                        className="whitespace-pre-line"
                    >
                        {`
                        I have been working as a freelancer since I start programming. 

                        I have worked on a variety of small projects and have been able to learn a lot from them.

                        I work around all the process, from the design to the development.
                        `}
                    </p>
                    <a href="#builds" >see more</a>
                </div>
                <div>
                    <h5>
                        epiphanyapps
                    </h5>
                    <p className="text-sm">
                        jan 2020 - oct 2022
                    </p>

                    <p
                        className="whitespace-pre-line"
                    >
                        {`
                        I work for this company as contractor for 6 months until the project was ready to production. 

                        My principal job was fix UI bugs and integrations of new features.
                         `}
                    </p>

                    <a href="https://packshoe.com" target='_blank'>see more</a>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Jobs