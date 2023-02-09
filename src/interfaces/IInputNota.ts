export interface INotes {
    value: number;
    percentage: number;
}

export interface IInputNotaProps {
    defaultV: INotes;
    setNotes: React.Dispatch<React.SetStateAction<INotes[]>>;
    LoopKey: number;
}