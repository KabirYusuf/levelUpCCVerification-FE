import { useState } from "react";
import InputBox from "../component/InputBox.component";
import Container from "../component/container.component"
import "./homepage.css";


const Homepage = () => {

    const [cardType, setCardType] = useState("");
    const [date, setDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardNumber, setCardNumber] = useState("")


    const handleChange = (event) => {
            event.preventDefault()
            if (event.target.name === "cardType")  setCardType(event.target.value)
            if (event.target.name === "date")  setDate(event.target.value)
            if (event.target.name === "cvv")  setCvv(event.target.value)
            if (event.target.name === "cardNumber")  setCardNumber(event.target.value)
      
           
    }

    const handleSubmit = () => {

        console.log(cardNumber)
        console.log(cardType)
        console.log(cvv)
        console.log(date)

        alert("submitted")
    }



    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <select value={cardType} name="cardType" className="select" onChange={(e) => handleChange(e)}>
                    <option defaultChecked>--Select Card Type--</option>
                    <option defaultChecked> Visa</option>
                    <option defaultChecked> Mastercard</option>
                    <option defaultChecked> American express</option>
                    <option defaultChecked> Discover</option>
                </select>

                <div className="first-row">
                <InputBox name="date" value={date}  placeholder={"mm / yyyy"} size="100%" handleChange={ (e) => handleChange(e)} />
                <InputBox name="cvv" value={cvv} placeholder={"cvv"} size="95%" handleChange={ (e) => handleChange(e)} />
                </div>
                <InputBox name="cardNumber" value={cardNumber} placeholder={"card number"} size="95%" handleChange={ (e) => handleChange(e)} />
        
                <button className="button">Verify</button>
            </form>
        </Container>
    )
}

export default Homepage;