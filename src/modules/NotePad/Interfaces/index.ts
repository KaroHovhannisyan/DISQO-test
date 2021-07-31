export interface INote {
  title: string;
  description: string;
  id: string;
  raw_url?: string;
}

export interface INotepad {
  notesLength?: number;
  id: string;
  title: string;
  notes: INote[];
}