import React from 'react'
import { AddTodo } from '../addTodo/AddTodo'

export const AddToDo = ({ todos }) => {
  return (
    <div className='d-flex flex-column align-items-center tasks-list'>
      {
        (todos.length > 0)
          ? todos.map(({ title, id, done }) => <AddTodo key={id} title={title} id={id} done={done} />)
          : <p className='alert alert-warning col-11 text-center'>Dont have any tasks</p>
      }
    </div>
  )
}