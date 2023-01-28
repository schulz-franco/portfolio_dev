import gameImg from "../assets/game.svg";
import authImg from "../assets/auth.svg";
import gridImg from "../assets/grid.svg";

export const data = [
    {
        image: gameImg,
        title: "Tic Tac Toe",
        text: "Juego Tic Tac Toe con puntuación y reset. Proximamente multijugador.",
        state: false,
        url: "",
        github: "https://github.com/schulz-franco/tic-tac-toe"
    },
    {
        image: authImg,
        title: "Plantilla de autenticación",
        text: "Frontend y backend de sistema de autenticación basico sin JWT.",
        state: false,
        url: "",
        github: "https://github.com/schulz-franco/basic_auth_template"
    },
    {
        image: gridImg,
        title: "Generador CSS",
        text: "Aplicación para generar código CSS de manera sencilla, muestra los cambios en tiempo real y genera el código.",
        state: true,
        url: "",
        github: "https://github.com/schulz-franco/generador_css"
    }
]