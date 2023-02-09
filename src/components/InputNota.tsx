import React from 'react';
import { FormControl } from 'react-bootstrap';
import { IInputNotaProps } from '../interfaces/IInputNota';

export const InputNota = (props: IInputNotaProps) => {
    const { LoopKey, defaultV } = props;   
   
    return (
       <>
         <FormControl size="sm" type='number' step="any" placeholder={`Nota ${LoopKey + 1}`} name={`nota[${LoopKey}]`} />
         <FormControl hidden type='number' name={`percentage[${LoopKey}]`} step="any" defaultValue={defaultV.percentage} />
       </>
    )
}
