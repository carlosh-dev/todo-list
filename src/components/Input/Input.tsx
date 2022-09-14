import { ChangeEvent, InputHTMLAttributes, InvalidEvent } from 'react'
import styles from './Input.module.css'

interface InputPorps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (event:ChangeEvent<HTMLInputElement>) => void;
    onInvalid:(event:InvalidEvent<HTMLInputElement>) => void;
}

export function Input({ onChange, onInvalid, ...props }: InputPorps) {
    return (
        <input
            className={styles.input}
            onChange={onChange}
            onInvalid={onInvalid}
            {...props}
        />
    )
}