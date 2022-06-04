import SkillCard from "./SkillCard"

const Skills = () => {
    return (
        <div
            className='bg-slate-500 bg-opacity-50  bg-no-repeat bg-cover flex min-h-screen w-full'
            style={{ backgroundImage: `url(/images/ireland.jpg)` }}
        >
            <div className='grid grid-cols-1 sm:grid-cols-3 place-content-center place-items-center gap-10 py-10' >
                <SkillCard />
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