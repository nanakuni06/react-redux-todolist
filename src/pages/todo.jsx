import React from 'react'
import TodoInput from '../components/todo-input'
import TodoList from '../components/todo-list'
import Header from '../components/header'
import FilterTodo from '../components/filter-todo'

function Todo() {
  return (
    <>
    <div className="w-full max-w-lg mx-auto p-8 my-20 w-100 md:-10 lg:my-40 lg:mx-auto rounded-xl bg-violet-400 shadow-xl body-font font-poppins">
        <Header/>
        <TodoInput/>
        <FilterTodo/>
        <TodoList/>
    </div>
    </>
  )
}

export default Todo