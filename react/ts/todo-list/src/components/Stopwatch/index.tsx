import { useState, useEffect } from "react";
import timeToSeconds from "../../common/utils/time";
import { ITasks } from "../../types/ITaks";
import Button from "../Button";
import Clock from "./Clock";

import styles from './Stopwatch.module.scss'

interface StopwatchProps {
  selected: ITasks | undefined
  finishTask: () => void
}

export default function Stopwatch({ selected, finishTask }: StopwatchProps) {

  const [time, setTime] = useState<number>()
  
  useEffect(() => {
    if(selected?.tempo) {
      setTime(timeToSeconds(selected.tempo))
    }
  }, [selected])


  function countdown(aux: number = 0) {
    setTimeout(() => {
      if(aux > 0) {
        setTime(aux - 1)
        return countdown(aux - 1)
      }
      finishTask()
    }, 1000)
  }
  
  return(
    <div className={styles.cronometro}>
      <p className={styles.titulo}>
        Escolha uma tarefa e inicie o cronômetro
      </p>
      <div className={styles.relogioWrapper}>
        <Clock
          time={time}
        />
      </div>
      <Button 
        onClick={() => countdown(time)}
      >
        Começar
      </Button>
    </div>
  )
}