import React from "react";
import style from "./Button.module.scss";

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void | undefined,
    children?: React.ReactNode | undefined;
}

function Button({ type, onClick, children }: Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Button;