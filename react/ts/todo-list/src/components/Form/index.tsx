import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss'

import { v4 as uuidv4 } from 'uuid'
import { ITasks } from "../../types/ITaks";

type FormProps = {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

export default function Form( { setTasks }: FormProps ) {
  const [inputs, setInputs] = useState({
    tarefa: "",
    tempo: "00:00"
  })


  function clearFields() {
    setInputs({
      tarefa: "",
      tempo: "00:00"
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks(prev => 
      [...prev, 
        {
          ...inputs,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ])

    clearFields()
  }

  return (
    <form 
      className={style.novaTarefa}
      onSubmit={handleSubmit}
    >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione uma nova tarefa
        </label>
        <input 
          type="text" 
          name="tarefa"
          id="tarefa"
          value={inputs.tarefa}
          placeholder="O que você quer estudar?"
          onChange={event => setInputs({...inputs, tarefa: event.target.value})}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo"></label>
        <input 
          type="time" 
          step="1"
          name="tempo"
          id="tempo"
          min="00:00"
          max="01:30"
          required
          value={inputs.tempo}
          onChange={event => setInputs({...inputs, tempo: event.target.value})}
        />
      </div>
      
      <Button
        type="submit"
      >
        Adicionar
      </Button>
    </form>
  )
}