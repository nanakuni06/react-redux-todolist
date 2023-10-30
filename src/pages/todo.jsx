import React from 'react'
import TodoInput from '../components/todo-input'
import TodoList from '../components/todo-list'
import Header from '../components/header'
import FilterTodo from '../components/filter-todo'

function Todo() {
  return (
    <>
    <div className="w-full max-w-lg mx-auto">
        <Header/>
        <TodoInput/>
        <FilterTodo/>
        <TodoList/>
    </div>
    </>
  )
}

export default Todo