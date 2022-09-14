import { v4 as uuid } from 'uuid';

export const tasks = [
    {
        id: uuid(),
        title: "Estudar ReactJS",
        isDone: true,
    },
    {
        id: uuid(),
        title: "Finalizar o desafio",
        isDone: true,
    },
    {
        id: uuid(),
        title: "Enviar o desafio",
        isDone: false,
    }
]