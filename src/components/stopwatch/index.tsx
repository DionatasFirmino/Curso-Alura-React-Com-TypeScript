import Button from "../button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss";
import { ITask } from "../types/task";
import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time";

interface Props {
    taskSelected: ITask | undefined,
    finishTask: () => void
}

export default function Stopwatch({ taskSelected, finishTask }: Props) {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        if (taskSelected?.tempo) {
            setTime(timeForSeconds(taskSelected.tempo));
        }
    }, [taskSelected])

    function regressive(cont: number = 0) {
        setTimeout(() => {
            if (cont >= 0) {
                setTime(cont--);
                return regressive(cont--);
            }
            finishTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={() => regressive(time)}>
                Começar!
            </Button>
        </div>
    )
}