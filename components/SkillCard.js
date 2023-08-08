//@ts-ignore
/**
 * #You can't use image/next because de images are coming for multiple pages ...
 *
 */
const SkillCard = ({ skill = {} }) => {
  const {
    name = 'skill name',
    image = '',
    experience = 'skill experience'
  } = skill
  return (
    <div className="bg-base-300 h-32 w-44 flex ">
      <div>
        <img src={image} alt={name} className="h-20" />
      </div>
      <h4>{name}</h4>
      <p className="text-sm">{experience}</p>
    </div>
  )
}
export default SkillCard
