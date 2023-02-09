import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import { IAlertProps, Idefaults } from '../interfaces/IAlert'
const defaults: Idefaults[] = [
    {
        min: 0.1,
        max: 2.0,
        message: "perdido"
    },

    {
        min: 2.1,
        max: 3.4,
        message: "recuperable"
    },
    {
        min: 3.5,
        max: 4.5,
        message: "ganado"
    },
    {
        min: 4.6,
        max: 5.0,
        message: "honores"
    },

];
export const AlertI = (props: IAlertProps) => {
    const { note: nota, emptyNotes, savedNotes } = props;
    const [messages, setMessages] = useState<string[]>();
    useEffect(() => {
        Messages();
    }, [emptyNotes]);
    const Messages = () => {
        if (emptyNotes === 1) {
            const lessMessage = defaults.filter((value) => value.min >= nota);
            console.log(lessMessage);
        }
    }

    const returnMessage = (field: string, empty: boolean, nota: number) => {
        if(empty) return {
            perdido: "Haz perdido la asignatura, pero tienes oportunidad de recuperar"
        }
    }

    return (
        <>
            {
                emptyNotes <= 1 && (
                    <Alert />
                )
            }
        </>
    )
}
