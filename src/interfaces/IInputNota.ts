export interface INotes {
    value: number;
    percentage: number;
}

export interface IInputNotaProps {
    defaultV: number;
    setNotes: React.Dispatch<React.SetStateAction<INotes[]>>;
    LoopKey: number;
}