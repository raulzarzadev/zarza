const SkillCard = ({ skill = {} }) => {
    const { name = 'skill name', image = '', experience = 'skill experinece' } = skill
    return (
        <div className='bg-base-300 h-32 w-44 flex '>
            <div>
                <img src={image} alt={name} className='h-20' />
            </div>
            <h4>{name}</h4>
            <p className='text-sm'>
                {experience}
            </p>
        </div>
    )
}
export default SkillCard  