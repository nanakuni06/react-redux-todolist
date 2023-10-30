import React from 'react'
import TodoInput from '../components/todo-input'
import TodoList from '../components/todo-list'
import Header from '../components/header'

function Todo() {
  return (
    <>
        <Header/>
        <TodoInput/>
        <TodoList/>
    </>
  )
}

export default Todo