export type Status = 'Not Started' | 'To-Do List' | 'In Progress' | 'Completed';


export interface Column {
  id: string;
  title: string;
  status: Status;
  color: string;
  count: number;
}