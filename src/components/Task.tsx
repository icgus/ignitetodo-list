import { ITask } from '../App';
import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react'
import Check from '../assets/Check.svg'

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className={styles.task}>
            <button
            className={styles.checkContainer}
            onClick={() => onComplete(task.id)}
            >
                {task.isCompleted ? <img src={Check} /> : <div className={styles.checkContainerUnchecked} />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    );
}