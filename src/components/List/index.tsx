import { ITask } from "../types/task";
import Item from "./item";
import Style from "./List.module.scss";

function List({ tasks }: { tasks: ITask[] }) {

    return (
        <aside className={Style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    )
}

export default List;