import React from "react"

export default class Captcha extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userCode: "", length: 10, generatedCode: "" };
        this.alphanumeric = "qwertyuiopasdfghjklzxcvbnm0123456789";
        this.canvasRef = React.createRef(null);
    }

    loadCodeToCanvas = ()=> {
        const canvas = this.canvasRef.current;
        const canvasContext = canvas.getContext("2d");
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = "#fff";
        canvasContext.font = "bold 40px Verdana";
        canvasContext.textBaseline = "middle";
        canvasContext.textAlign = "center";
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        canvasContext.fillText(this.state.generatedCode, centerX, centerY);
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

    showNewCode = ()=> {
        this.generateCode();
        this.loadCodeToCanvas();
    }

    render() {
        return(
            <div id="captchaCode">
                <div className="container">
                    <canvas style={{ width: '100%', height: '120px' }} ref={this.canvasRef}></canvas>
                    <div onClick={() => this.showNewCode()} className="reload">Generar</div>
                </div>
                <input onChange={(ev) => this.setState({ ...this.state, userCode: ev.target.value })} type="text" />
            </div>
        )
    }
}