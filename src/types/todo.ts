export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
export type ViewType = 'GRID' | 'CALENDAR';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  dueDate?: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoFilter {
  search: string;
  completed?: boolean;
  priority?: Priority;
  category?: string;
  dateRange?: {
    start: string;
    end: string;
  };
} 