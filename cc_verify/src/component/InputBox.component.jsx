import "./InputBox.styles.css";

const InputBox = ({type, name, value, handleChange, size, placeholder , max, min}) => {


    return (
        <div>
            <input 
            placeholder={placeholder}
            required
            maxLength={max}
            minLength={min}
            label="name"
            type={type} 
            name={name} 
            value={value}  
            style={{width: size}}
            className="input"
            onChange={ (e) => handleChange(e)} />
        </div>
    )
}

export default InputBox