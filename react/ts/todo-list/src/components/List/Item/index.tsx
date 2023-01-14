import styles from '../List.module.scss'
import { ITasks } from '../../../types/ITaks'

interface ItemProps extends ITasks {
  selectTask: (task:ITasks)  => void
}

export default function Item({ tarefa, tempo, selected, completed, id, selectTask}: ItemProps) {
  console.log();
  
  return(
    <li 
      className={`${styles.item} ${selected ? styles.itemSelecionado : null} ${completed ? styles.itemCompletado : null}`}
      onClick={() => !completed && selectTask({ tarefa, tempo, selected, completed, id})}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completed && <span className={styles.concluido} aria-label='tarefa concluída'></span>}
    </li>
  )
}