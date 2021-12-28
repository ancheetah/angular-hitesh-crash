export interface Todo {
    // never write functional code in interface (do this in app.component.ts)
    // only define properties
    id: number;
    value: string;
    isDone: boolean;
}