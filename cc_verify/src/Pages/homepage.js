import { useState } from "react";
import InputBox from "../component/InputBox.component";
import Container from "../component/container.component"
import "./homepage.css";
import axios from "axios";


const Homepage = () => {

    // const [cardType, setCardType] = useState("");
    const [expiryDate, setexpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardNumber, setCardNumber] = useState("")
    const [response, setResponse] = useState(null);


    const handleChange = (event) => {
            event.preventDefault()
            // if (event.target.name === "cardType")  setCardType(event.target.value)
            if (event.target.name === "expiryDate")  setexpiryDate(event.target.value)
            if (event.target.name === "cvv")  setCvv(event.target.value)
            if (event.target.name === "cardNumber")  setCardNumber(event.target.value)   
    }


    const isCardValid = (cardNumber, cvv, expiryDate) => {
            
        let cardData = [cardNumber, cvv, expiryDate];

        for (let x of cardData){
            if (x === "")  alert(`All Fields must be filled`)
                return false
            
        }
        return true;
    }

    const handleSubmit =  async (event) => {
        setResponse("");
        
        event.preventDefault();
    
        // const isValidCard = isCardValid(cardNumber,cvv, expiryDate)
        // if (!isValidCard) return
        

        const cardData = {
            cardNumber: cardNumber,
            cvv: cvv,
            expiryDate: expiryDate

        }
        axios
    .post("http://localhost:8080/api/v1/credit-card/validate/", cardData)
    .then(res => {
        console.log("Response Data:", res.data);
        setResponse(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
        setResponse(err.response.data);
    });
        

    }

    const renderResponse = () => {
        
    if (response && response.successfulRequest !== undefined) {
        return (
            <div>
                <p>Is Request Successful: {response.successfulRequest.toString()}</p>
                <p>Data: {response.data}</p>
            </div>
        );
    }
    return null;
};

    


    return (
        <Container>
            <form onSubmit={handleSubmit} >
            
                <div className="credit-card-validator"><h3>Credit Card Validator</h3></div>

                <div className="first-row">
                <InputBox name="expiryDate" value={expiryDate}  placeholder={"mm / yyyy"} size="100%" handleChange={ (e) => handleChange(e)} />
                <InputBox name="cvv" value={cvv} placeholder={"cvv"} size="95%" handleChange={ (e) => handleChange(e)} />
                </div>
                <InputBox name="cardNumber" value={cardNumber} placeholder={"card number"} size="95%" handleChange={ (e) => handleChange(e)} />
        
                <button className="button" type="submit">Validate</button>
            </form>
            {renderResponse()}
        </Container>
    )
}

export default Homepage;