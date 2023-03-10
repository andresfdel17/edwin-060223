import { INotes } from "./IInputNota";

export interface IAlertProps {
    savedNotes: INotes[];
    emptyNotes: number;
    note: number;
}

export interface Idefaults {
    min: number;
    max: number;
    message: string;
    variant: string;
}

export interface IMessage {
    [key: string]: string;
}