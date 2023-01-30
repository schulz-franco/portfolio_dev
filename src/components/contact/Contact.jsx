import { useState } from "react";
import "./contact.scss";

const Contact = () => {

    const [alert, setAlert] = useState({ value: false, type: false })

    // Validaciones para evitar flood
    const validateFlood = (message)=> {
        const existQuantity = localStorage.getItem("messageQuantity");
        const existMessage = localStorage.getItem("message");
        if (existMessage.toLowerCase() === message) {
            setAlert({ value: true, type: false, message: "Ya has enviado ese mensaje." })
            return false
        }
        if (existQuantity) {
            const item = parseInt(existQuantity);
            if (item > 0 && item < 2) {
                localStorage.setItem("messageQuantity", item + 1);
            } else {
                setAlert({ value: true, type: false, message: "Ya has enviado demasiados mensajes." });
                return false
            }
        } else {
            localStorage.setItem("messageQuantity", 1);
        }
        localStorage.setItem("message", message)
        return true
    }

    const onSubmitHandler = (ev)=> {
        ev.preventDefault();
        const [name, lastname, email, message] = [ev.target[0].value, ev.target[1].value, ev.target[2].value, ev.target[3].value.toLowerCase()]
        if (validateFlood(message)) {
            return setAlert({ value: true, type: true, message: "Tu mensaje se envio correctamente." })
        } else return
    }

    const alertClassname = alert.type ? 'success' : '';

    return (
        <section id="contacto">
            <h2>Contáctame ahora</h2>
            <span>Envíame un mensaje <b>fácil y rápido</b></span>
            <form onSubmit={(ev) => onSubmitHandler(ev)} >
                <input autoComplete="off" type="text" name="name" maxLength={20} minLength={4} placeholder='Nombre' required />
                <input autoComplete="off" type="text" name="lastname" maxLength={20} minLength={4} placeholder='Apellido' required />
                <input autoComplete="off" type="email" name="email" maxLength={40} minLength={14} placeholder='Email' required />
                <textarea name="message" maxLength={200} placeholder='Escribí tu mensaje...'/>
                {alert.value && <p className={alertClassname}>{alert.message}</p>}
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact