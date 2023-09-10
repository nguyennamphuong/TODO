export class ToDo {

    public Id:number;
    public Name: string;
    public Content: string;
    public IsComplete: boolean;

    constructor (private id: number, private name: string, private content: string, private isComplete: boolean)
    {
        this.Id = id;
        this.Name = name;
        this.Content = content;
        this.IsComplete = isComplete;
    }
}
