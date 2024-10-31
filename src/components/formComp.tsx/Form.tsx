import {FC, useRef, useState} from 'react'
import { addMission , fetchMissions} from '../../services/data'
import Mission from '../../types/Mission';
import styles from './Form.module.css'

interface Props {
    setMissions: (missions: Mission[]) => void;
}
    

const Form:FC<Props> = ({ setMissions, }) => {

    const nameInputRef = useRef<HTMLInputElement>(null)
    const statusSelectedRef = useRef<HTMLSelectElement>(null)
    const prioritySelectedRef = useRef<HTMLSelectElement>(null)
    const descriptionSelectedRef = useRef<HTMLTextAreaElement>(null)
    const submitButtonRef = useRef<HTMLButtonElement>(null)
    const [ErrorMessage, setErrorMessage] = useState<boolean>()
    const [Errorvalue, setErrorValue] = useState<string>()

    const handleSubmit = async () => {
        if (!nameInputRef.current &&
             !statusSelectedRef &&
             !prioritySelectedRef.current &&
             !descriptionSelectedRef) {
              setErrorValue('One or more details were submitted')
              setErrorMessage(false)
             }
        const name = nameInputRef.current?.value as string;
        const status = statusSelectedRef.current?.value as "Pending" | "In Progress" | "Completed";
        const priority = prioritySelectedRef.current?.value as  "Low" | "High" | "Medium"; 
        const description = descriptionSelectedRef.current?.value as string;
        const success = await addMission({
            name,
            status,
            priority,
            description,
        })
        if (success) {
            const missions = await fetchMissions()
            setMissions(missions)
        }else {
            console.error('Failed to add mission')
            setErrorValue('Failed to add mission')
            setErrorMessage(true)
        }
    }

  return (
    <div className={styles.form}>
        <input
        className={styles.input}
          type="text"
          placeholder="Mission name"
          ref={nameInputRef}
        />
        <select className={styles.select}
          ref={statusSelectedRef}
        >
          <option value="">Select status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select
        className={styles.select}
          ref={prioritySelectedRef}
        >
          <option value="">Select priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <textarea
          className={styles.textarea}
          placeholder="Description"
          ref={descriptionSelectedRef}
        ></textarea>
        <button
          className={styles.button}
          ref={submitButtonRef}
          onClick={handleSubmit}
        >
          Add Mission
        </button>
        {ErrorMessage && <p className={styles.error}>{Errorvalue}</p>}
    </div>
  )
}

export default Form