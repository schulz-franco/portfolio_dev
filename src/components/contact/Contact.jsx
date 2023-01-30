import { useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import Joi from "joi";

const Contact = () => {

    const [alert, setAlert] = useState({ value: false, type: false });

    const formSchema = Joi.object({
        name: Joi.string().min(4).max(20).required().pattern(/^[a-zA-Z]+$/),
        lastname: Joi.string().min(4).max(20).required().pattern(/^[a-zA-Z]+$/),
        email: Joi.string().email({ tlds: { allow: ["com", "ar", "net"] } }).required().pattern(/^[a-zA-Z0-9@.]+$/),
        message: Joi.string().max(200).required()
    })

    const validateForm = (formData)=> {
        const result = formSchema.validate(formData);
        const { error } = result;
        if (error) {
            const path = error.details[0].path[0];
            if (path === "name") {
                setAlert({ value: true, type: false, message: "El nombre no es válido, solo se permiten letras." });
            } else if (path === "lastname") {
                setAlert({ value: true, type: false, message: "El apellido no es válido, solo se permiten letras."  });
            } else if (path === "email") {
                setAlert({ value: true, type: false, message: "El email no es válido o no esta permitido."  });
            } else if (path === "message") {
                setAlert({ value: true, type: false, message: "Ocurrió un error con el mensaje, intente recargar la página."  });
            }
            return false;
        } else {
            return true;
        }
    }

    // Validaciones para evitar flood
    const validateFlood = (message)=> {
        const existQuantity = localStorage.getItem("messageQuantity");
        const existMessage = localStorage.getItem("message");
        if (existMessage.toLowerCase() === message) {
            setAlert({ value: true, type: false, message: "Ya has enviado ese mensaje." });
            return false;
        }
        if (existQuantity) {
            const item = parseInt(existQuantity);
            if (item > 0 && item < 2) {
                localStorage.setItem("messageQuantity", item + 1);
            } else {
                setAlert({ value: true, type: false, message: "Ya has enviado demasiados mensajes." });
                return false;
            }
        } else {
            localStorage.setItem("messageQuantity", 1);
        }
        return true;
    }

    const onSubmitHandler = (ev)=> {
        ev.preventDefault();
        const [name, lastname, email, message] = [ev.target[0].value, ev.target[1].value, ev.target[2].value, ev.target[3].value.toLowerCase()];
        if (validateForm({ name, lastname, email, message })) {
            if (validateFlood(message)) {
                emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, ev.target, process.env.REACT_APP_PUBLIC_KEY).then(res => {
                    localStorage.setItem("message", message);
                    return setAlert({ value: true, type: true, message: "Tu mensaje se envió correctamente." });
                }).catch(error => {
                    return setAlert({ value: true, type: false, message: "Ha ocurrido un error, intente más tarde." });
                })
            } else {
                return;
            }
        } else {
            return;
        }
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