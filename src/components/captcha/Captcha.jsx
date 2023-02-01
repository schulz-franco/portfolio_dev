import React from "react"

export default class Captcha extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userCode: "", length: 10, generatedCode: "" }
        this.alphanumeric = "qwertyuiopasdfghjklzxcvbnm0123456789"
    }

    generateCode = ()=> {
        let generatedCode = "";
        let lastRandomNumber;
        for (let count = 0; count < this.state.length; count++) {
            let randomNumber;
            let generatedChar;
            while (true) {
                randomNumber = Math.floor(Math.random() * this.alphanumeric.length);
                generatedChar = this.alphanumeric.charAt(randomNumber);
                if (randomNumber !== lastRandomNumber) break;
            }
            lastRandomNumber = randomNumber;
            generatedCode += generatedChar;
        }
        return this.setState({ ...this.state, generatedCode });
    }

    render() {
        return(
            <div id="captchaCode">
                <div className="container">
                    <span>{this.state.generatedCode}</span>
                    <div onClick={this.generateCode} className="reload">Generar</div>
                </div>
                <input onChange={(ev) => this.setState({ ...this.state, userCode: ev.target.value })} type="text" />
            </div>
        )
    }
}