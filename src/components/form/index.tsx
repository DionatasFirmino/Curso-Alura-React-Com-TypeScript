import React, { useState } from "react";
import Button from "../button";
import { ITask } from "../types/task";
import Style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid"

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(tasksOld =>
            [
                ...tasksOld,
                {
                    tarefa: task,
                    tempo: time,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

        setTask("");
        setTime("00:00");
    }

    return (
        <form className={Style.novaTarefa} onSubmit={addTask}>
            <div className={Style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={task}
                    onChange={evento => setTask(evento.target.value)}
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
                    value={time}
                    onChange={evento => setTime(evento.target.value)}
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Form;