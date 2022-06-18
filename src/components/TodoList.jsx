// EL COMPONENTE PADRE QUE SOLO MUESTRA LA LISTA DE TODOS Y PASA POR REFERENCUIA LA FUNCIONES QUE LOS ITEM PUEDEN EJECUTAR

import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
