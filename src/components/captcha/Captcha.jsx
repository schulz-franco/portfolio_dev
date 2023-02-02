import React from "react"
import "./captcha.scss";

export default class Captcha extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userCode: "", length: 10, generatedCode: "" };
        this.alphanumeric = "qwertyuiopasdfghjklzxcvbnm0123456789";
        this.canvasRef = React.createRef(null);
        this.inputRef = React.createRef(null);
    }

    validate = ()=> {
        this.inputRef.current.value = "";
        return this.state.generatedCode === this.state.userCode;
    }

    loadCodeToCanvas = (generatedCode)=> {
        const canvas = this.canvasRef.current;
        const canvasContext = canvas.getContext("2d");
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = "white";
        canvasContext.strokeStyle = "white";
        canvasContext.textBaseline = "middle";
        canvasContext.textAlign = "center";
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        const fontSizeList = ['30px', '35px', '50px'];
        const fontFamilyList = ['Verdana', 'sans-serif', 'serif'];
        const fontWeightList = ['100', '600', '1000'];
        let lastStroke = false;
        let countStroke = 0;

        for (let index = 0; index < generatedCode.length; index++) {
            canvasContext.save();
            const randomNumber = Math.floor(Math.random() * 3);
            canvasContext.font = `${fontWeightList[randomNumber]} ${fontSizeList[randomNumber]} ${fontFamilyList[randomNumber]}`;
            canvasContext.translate(-centerX / 2 - 32, 0);
            canvasContext.rotate(Math.random() * 0.09);
            if (fontWeightList[randomNumber] === '1000' && fontSizeList[randomNumber] === '50px' && !lastStroke && countStroke < 2) {
                canvasContext.strokeText(generatedCode[index], centerX + 24 * index, centerY);
                lastStroke = true;
                countStroke += 1;
            } else {
                canvasContext.fillText(generatedCode[index], centerX + 24 * index, centerY);
                lastStroke = false;
            }
            canvasContext.restore();
        }
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
        this.setState({ ...this.state, generatedCode });
        return generatedCode
    }

    showNewCode = ()=> {
        const generatedCode = this.generateCode();
        this.loadCodeToCanvas(generatedCode);
    }

    render() {
        return(
            <div id="captchaCode">
                <canvas ref={this.canvasRef}></canvas>
                <div className="buttons">
                    <input ref={this.inputRef} placeholder="Confirma el código" onChange={(ev) => this.setState({ ...this.state, userCode: ev.target.value.toLowerCase() })} type="text" />
                    <img onClick={() => this.showNewCode()} width='24' height='24' src="/assets/reload.svg" alt="Nuevo código" />
                </div>
            </div>
        )
    }
}