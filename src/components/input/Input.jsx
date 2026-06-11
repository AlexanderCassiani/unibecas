import './input.css'

const Input = ({ type = "text", placeholder, className = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`input ${className}`}
        />
    )
}

export default Input