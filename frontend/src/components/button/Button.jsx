import './button.css'

const Button = ({ title, text, className, onClick }) => {
    return (
        <button 
            title={title} 
            className={`button ${className}`} 
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
