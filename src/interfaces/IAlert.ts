export interface IAlertProps {
    note: number;
    less: number;
    emptyNotes: number;
    setLess: React.Dispatch<React.SetStateAction<number>>;
}

export interface Idefaults {
    min: number;
    max: number;
    message: string;
}