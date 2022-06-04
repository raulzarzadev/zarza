const About = () => {
    return (
        <div
            className='bg-no-repeat bg-cover flex  min-h-screen w-full bg-fixed'
            style={{ backgroundImage: `url(/images/code.jpg)` }}
        >
            <div className='bg-black bg-opacity-30 h-screen flex  text-white w-full '>
                <div className='max-w-md mx-auto flex items-center'>
                    <div>
                        <h2 className='font-bold  text-4xl text-center pt-10'>About me</h2>
                        <p className='text-center'>
                            {`I love to create solutions and make PWA's. Currently I'm using Next.js and Firebase to make it faster.`}
                            <a href='#work'>whan a see some</a> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About