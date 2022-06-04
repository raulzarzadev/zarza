import SkillCard from "./SkillCard"

const Skills = () => {
    return (
        <div
            className='bg-slate-500 bg-opacity-50  bg-no-repeat bg-fixed bg-cover flex min-h-screen w-full mx-auto'
            style={{ backgroundImage: `url(/images/ireland.jpg)` }}
        >
            <div className='grid grid-cols-1 sm:grid-cols-3 place-content-center place-items-center gap-10 py-10 mx-auto' >
                <SkillCard skill={{
                    name: 'HTML',
                    image: '/techs/html-5.svg',
                    experience: 'I have 4 years of experience with HTML5 and CSS3'
                }}/>
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
            </div>
        </div>)
}

export default Skills