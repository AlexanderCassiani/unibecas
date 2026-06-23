import './button.css'

const Button = ({ title, type = 'button', text, className, onClick }) => {
    return (
        <button 
            title={title} 
            className={`button ${className}`} 
            onClick={onClick}
            type={type}
        >
            {text}
        </button>
    )
}

export default Button
