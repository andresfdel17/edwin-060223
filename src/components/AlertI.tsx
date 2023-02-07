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

]
export const AlertI = (props: IAlertProps) => {
    const { note: nota, emptyNotes } = props;
    const [variant, setVariant] = useState<string>("primary");
    const [text, setText] = useState<string>("");
    const [messages, setMessages] = useState<string[]>([]);
    useEffect(() => {
        console.log(nota, emptyNotes)
        setAlmostMessage();
    },[]);
    const setMessage = (message: string) => {
        switch (true) {
            case (message === "perdido"):
               
                break;
        }

    }
    const setAlmostMessage = () => {
        const compare = defaults.filter((value) => value.min <= nota && value.max >= nota);
        console.log(compare);
    }
    return (
        <Alert variant={variant}>
            {
                text
            }
            
        </Alert>
    )
}
