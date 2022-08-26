import { ITask } from '../../types/task';
import style from '../List.module.scss';

interface Props extends ITask {
    selectTask: (taskSelected: ITask) => void
}

export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selectTask
}: Props) {
    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
            onClick={
                () => selectTask({
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                })
            }
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}