import Logo from '../assets/Logo.svg'
import { AiOutlinePlusCircle} from 'react-icons/ai'
import styles from './Header.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);

        setTitle('');
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setTitle(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Por favor, digite uma tarefa');
    }

    return (
        <header className={styles.header}>
            <img src={Logo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input
                placeholder='Adcione uma nova tarefa' 
                onChange={onChangeTitle}
                value={title}
                onInvalid={handleNewTaskInvalid}
                required
                />
                <button className={styles.newTaskButton}>
                    Criar
                    <AiOutlinePlusCircle size={20} /> 
                </button>
            </form>
        </header>
    )
}