import * as React from 'react';
const { useState, useEffect, useMemo } = React;
import { Todo, TodoFilter } from '../types/todo';

const STORAGE_KEY = 'todos';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>({ search: '' });

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter.search && !todo.title.toLowerCase().includes(filter.search.toLowerCase())) {
        return false;
      }
      if (filter.completed !== undefined && todo.completed !== filter.completed) {
        return false;
      }
      if (filter.priority && todo.priority !== filter.priority) {
        return false;
      }
      if (filter.category && todo.category !== filter.category) {
        return false;
      }
      return true;
    });
  }, [todos, filter]);

  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEY);
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.error('Failed to load todos:', error);
    }
  }, []);

  const saveTodos = (newTodos: Todo[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
      setTodos(newTodos);
    } catch (error) {
      console.error('Failed to save todos:', error);
    }
  };

  const addTodo = (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTodo: Todo = {
      ...todo,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    saveTodos([...todos, newTodo]);
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, ...updates, updatedAt: new Date().toISOString() }
        : todo
    );
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    saveTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() }
        : todo
    );
    saveTodos(updatedTodos);
  };

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
  };
}; 