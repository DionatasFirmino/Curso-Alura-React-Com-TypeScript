import React from "react";
import Button from "../button";
import { ITask } from "../types/task";
import Style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid"

class Form extends React.Component<{
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTask(taskOld =>
            [
                ...taskOld,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        this.setState({
            tarefa: "",
            tempo: "00:00"
        });
    }

    render() {
        return (
            <form className={Style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={Style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;