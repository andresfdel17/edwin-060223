import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import { IAlertProps, Idefaults, IMessage } from '../interfaces/IAlert'
const defaults: Idefaults[] = [
    {
        min: 0.1,
        max: 2.0,
        message: "perdido",
        variant: "danger"
    },

    {
        min: 2.1,
        max: 3.4,
        message: "recuperable",
        variant: "warning"
    },
    {
        min: 3.5,
        max: 4.5,
        message: "ganado",
        variant: "success"
    },
    {
        min: 4.6,
        max: 5.0,
        message: "honores",
        variant: "primary"
    },

];
export const AlertI = (props: IAlertProps) => {
    const { note: nota, emptyNotes } = props;
    const [messages, setMessages] = useState<string[]>();
    const [variant, setVariant] = useState<string>("danger");
    useEffect(() => {
        Messages();
        // eslint-disable-next-line
    }, [emptyNotes, nota]);
    const Messages = () => {
        const mensajes: string[] = [];
        let data: any = () => { };
        let lessMessage: Idefaults[] = [];
        if (emptyNotes === 1) {
            lessMessage = defaults.filter((value) => parseFloat(value.min.toFixed(2)) > nota);
            data = (nota: number, less: number): IMessage => ({
                perdido: `Vas perdiendo la asignatura con un ${nota}, debes sacar ${less} para que sea recuperable`,
                recuperable: `Vas perdiendo la asignatura con un ${nota}, debes sacar ${less} para recuperar`,
                ganado: `Debes sacar ${less} para ganar con honores`,
                honores: ""
            });
        } else  if (emptyNotes === 0){
            lessMessage = defaults.filter((value) => parseFloat(value.min.toFixed(2)) <= nota && parseFloat(value.max.toFixed(2)) >= nota);
            data = (nota: number, less: number): IMessage => ({
                perdido: `Has perdido la asignatura con un ${nota}`,
                recuperable: `Has perdido la asignatura con un ${nota}`,
                ganado: `Has ganado la asignatura con ${nota}`,
                honores: `Has ganando la asignatura con ${nota} y muchos honores`
            });     
        }
        lessMessage.forEach((value, key, defaults) => {
            if (key === 0) setVariant(value.variant);
            const obj = data(parseFloat(nota.toFixed(2)), parseFloat(((value.max + 0.1 - nota) / 0.4).toFixed(2)));
            mensajes.push(obj[value.message])
        });
        setMessages(mensajes);
    }
    return (
        <>
            {
                emptyNotes <= 1 && (
                    <Alert variant={variant} >
                        Tu nota es: {nota.toFixed(2)} <br />
                        {
                            messages?.map((value, key) => <div key={key}>
                                {value}
                            </div>
                            )
                        }
                    </Alert>
                )
            }
        </>
    )
}
