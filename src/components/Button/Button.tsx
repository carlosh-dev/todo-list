import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './Button.module.css'

import { ThumbsUp, Trash } from 'phosphor-react';


interface CreateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    children?: JSX.Element | JSX.Element[];
}
export function Button({ onClick, children, ...props }: CreateButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}