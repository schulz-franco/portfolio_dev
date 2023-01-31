import React from "react"

export default class Captcha extends React.Component {
    constructor(props) {
        super(props);
        this.state = { code: "" }
        this.inputRef = React.createRef(null);
    }

    generateCode = ()=> {
        
    }

    getValue = ()=> {
        return this.state.code   
    }

    change = (ev)=> {
        ev.preventDefault();
        const inputValue = this.inputRef.current.value;
        return this.setState({ code: inputValue })
    }

    render() {
        return(
            <div id="codeGenerator">
                <canvas></canvas>
                <input onChange={(ev) => this.setState({ code: ev.target.value })} type="text" />
            </div>
        )
    }
}