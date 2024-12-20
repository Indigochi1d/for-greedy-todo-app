import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useRef, useState } from 'react';

function App() {
	const [todos, setTodos] = useState([]); // 초기값을 빈 배열로 설정
	const nextId = useRef(1); // nextId를 1로 초기화

	const onInsert = (text) => {
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		};
		setTodos(todos.concat(todo));
		nextId.current += 1;
	};

	const onRemove = (id) => {
		setTodos(todos => todos.filter((todo) => todo.id !== id));
	};

	const onToggle = (id) => {
		setTodos(todos =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo
		));
	};

	return (
		<>
			<TodoTemplate>
				<TodoInsert onInsert={onInsert} />
				<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
			</TodoTemplate>
		</>
	);
}

export default App;
