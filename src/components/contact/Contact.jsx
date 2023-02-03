import { useEffect, useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import Joi from "joi";
import Loader from "../loader/Loader";
import Captcha from "../captcha/Captcha";

const Contact = () => {

    const [alert, setAlert] = useState({ value: false, type: false });
    const [loader, setLoader] = useState(false);
    const captchaRef = useRef(null);

    useEffect(()=> {
        captchaRef.current.showNewCode();
    }, [])

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
        }
        if (!captchaRef.current.validate()) {
            captchaRef.current.showNewCode();
            setAlert({ value: true, type: false, message: "El código es incorrecto, intente nuevamente."  });
            return false
        }
        return true;
    }

    const clearForm = (ev)=> {
        ev.target[0].value = "";
        ev.target[1].value = "";
        ev.target[2].value = "";
        ev.target[3].value = "";
        ev.target[4].value = "";
    }

    const onSubmitHandler = (ev)=> {
        ev.preventDefault();
        const [name, lastname, email, message] = [ev.target[0].value, ev.target[1].value, ev.target[2].value, ev.target[3].value.toLowerCase()];
        if (validateForm({ name, lastname, email, message })) {
            setLoader(true);
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, { name, lastname, email, message }, process.env.REACT_APP_PUBLIC_KEY).then(res => {
                clearForm(ev);
                setLoader(false);
                return setAlert({ value: true, type: true, message: "Tu mensaje se envió correctamente." });
            }).catch(error => {
                setLoader(false);
                return setAlert({ value: true, type: false, message: "Ha ocurrido un error, intente de nuevo más tarde." });
            })
        } else {
            return;
        }
    }

    const alertClassname = alert.type ? 'success' : '';
    const buttonValue = loader ? <Loader width={18} height={18} /> : "Enviar";

    return (
        <section id="contacto">
            <h2>Contáctame ahora</h2>
            <span>Envíame un mensaje <span>fácil y rápido</span></span>
            <form onSubmit={(ev) => onSubmitHandler(ev)} >
                <div className="names">
                    <input autoComplete="off" type="text" name="name" maxLength={20} minLength={4} placeholder='Nombre' required />
                    <input autoComplete="off" type="text" name="lastname" maxLength={20} minLength={4} placeholder='Apellido' required />
                </div>
                <input autoComplete="off" type="email" name="email" maxLength={40} minLength={14} placeholder='Email' required />
                <textarea name="message" maxLength={200} placeholder='Escribí tu mensaje...'/>
                <Captcha ref={captchaRef} />
                {alert.value && <p className={alertClassname}>{alert.message}</p>}
                <button type="submit">{buttonValue}</button>
            </form>
        </section>
    )
}

export default Contact