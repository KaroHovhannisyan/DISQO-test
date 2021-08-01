import { INote, INotepadFile } from "../../Notepad/Interfaces";

export interface IGist {
    files: INotepadFile;
    data: INote[];
    date: string;
    created_at: string;
}
