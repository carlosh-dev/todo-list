import { Trash, Check } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    id: string;
    title: string;
    isDone: boolean;
    onCheck: (id:string) => void;
    onDelete: (id:string) => void;
}

export function Task({ id, title, isDone, onCheck, onDelete }: TaskProps) {
    function handleChangeTask(){
        onCheck(id);
    }

    function handleDeleteTask(){
        onDelete(id);
    }
    return (
        <div className={styles.taskWrapper}>
            <span onClick={handleChangeTask} className={isDone === false ? styles.checkboxDefault : styles.checkboxDone}>
                {isDone === false ? <></> : <Check size={15} />}
            </span>

            <p className={isDone === false ? styles.titleDefault : styles.titleDone}>
                {title}
            </p>

            <button onClick={handleDeleteTask}>
                <Trash size={20} />
            </button>
        </div>
    )
}