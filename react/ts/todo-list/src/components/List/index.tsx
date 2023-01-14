import Item from './Item'
import styles from './List.module.scss'
import {ITasks} from '../../types/ITaks'

type ListProps = {
  tasks: ITasks[],
  selectTask: (task:ITasks)  => void
}

export default function List({ tasks, selectTask } : ListProps) {
  
  return(
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item
            selectTask={selectTask}
            key={task.id}
            {...task}
          />
          ))}
      </ul>
    </aside>
  )
}