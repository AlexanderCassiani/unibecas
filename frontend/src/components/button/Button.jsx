import './button.css'

const Button = ({ title, text, className }) => {
    return (
        <button title={title} className={`button ${className}`}>{text}</button>
    )
}

export default Button
