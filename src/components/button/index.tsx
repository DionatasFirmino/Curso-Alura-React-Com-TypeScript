import React, { ReactNode } from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    children?: ReactNode | undefined;
}> {
    render() {
        const { type = "button" } = this.props
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;