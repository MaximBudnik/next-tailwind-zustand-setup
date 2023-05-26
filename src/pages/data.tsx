import {useTodoStore} from "@/store/todo.store";
import {useEffect} from "react";


export default function Data() {
    const {todoData, fetchTodoData} = useTodoStore();

    useEffect(() => {
        fetchTodoData();
    }, []);

    console.log(todoData);

    return (
        <div className="bg-gray-100">
            <div className="p-16 grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {todoData.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 bg-white shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                        <p className="text-gray-500">User ID: {item.userId}</p>
                        <p className="text-gray-500">Completed: {item.completed ? "Yes" : "No"}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}
