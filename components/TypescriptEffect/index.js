import style from './styles.module.css'
const TypescriptEffect = ({ label = 'Un texto' }) => {
    return (
        <span className={style.text}>
            {label}
        </span>
    )
}

export default TypescriptEffect