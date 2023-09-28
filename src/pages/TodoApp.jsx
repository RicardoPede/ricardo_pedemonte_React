import React, { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import "../components/css/ppal.css";
import { Form } from "../components/form/Form";
import { AddToDo } from "../components/todoList/TodoListItem";

export const TodoApp = () => {
  const [todos, setTodo] = useState([]);

  const handleAddTodo = (todo) => {
    setTodo([...todos, { id: Date.now(), title: todo, done: false }]);
  }
  return (
    <div className="d-flex flex-column home-container">
      <Navbar />
      <main className="d-flex flex-column flex-sm-row flex-lg-row justify-content-center align-items-center main-container">
        <section className="taskForm shadow col-11 col-sm-6 col-lg-6 d-flex justify-content-center align-items-center">
          <Form handleAddTodo={handleAddTodo} />
        </section>
        <section className="taskList mt-3  col-11 col-sm-6 col-lg-6">
          <AddToDo todos={todos} />
        </section>
      </main>
      <Footer />
    </div>
  );
};