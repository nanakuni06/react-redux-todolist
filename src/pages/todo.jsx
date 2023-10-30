import React from 'react'
import TodoInput from '../components/todo-input'
import TodoList from '../components/todo-list'
import Header from '../components/header'
import FilterTodo from '../components/filter-todo'

function Todo() {
  return (
    <>
    <div className='lg:px-80 lg:py-20 mx-0 py-20 px-5 bg-gradient-to-r from-pink-500 to-violet-500'>
      <div className="card shadow-2xl justify-center bg-violet-400">
        <div className="card-body">
            <Header/>
            <TodoInput/>
            <FilterTodo/>
            <TodoList/>
        </div>
      </div>
    </div>

    </>
  )
}

export default Todo