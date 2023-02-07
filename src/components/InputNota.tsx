import React, { ChangeEvent } from 'react';
import { FormControl } from 'react-bootstrap';
import { IInputNotaProps } from '../interfaces/IInputNota';

export const InputNota = (props: IInputNotaProps) => {
    const { setNotes, LoopKey } = props;   
    const setNota = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== "") {
            setNotes(prev => {
                prev[LoopKey].value = parseFloat(e.target.value);
                return prev;
            });
        }
    }
    return (
        <FormControl size="sm" type='number' step="any" placeholder={`Nota ${LoopKey + 1}`} onChange={setNota} />
    )
}
