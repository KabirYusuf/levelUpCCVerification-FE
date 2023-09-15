import "./InputBox.styles.css";

const InputBox = ({type, name, value, handleChange, size, placeholder}) => {


    return (
        <div>
            <input 
            placeholder={placeholder}
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