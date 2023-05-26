import create from 'zustand';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type TodoStore = {
    todoData: Todo[];
    fetchTodoData: () => Promise<void>;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todoData: [],
    fetchTodoData: async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos'
            );
            const data = await response.json();
            set({ todoData: data });
        }
        catch (error) {
            console.error(error);
        }
    },
}));
