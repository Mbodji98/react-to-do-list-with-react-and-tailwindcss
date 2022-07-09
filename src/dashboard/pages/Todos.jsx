import React, { useEffect, useState } from "react";
import { Layout, Todo } from "../Components";

function Todos() {
  const [todoForm, setTodoForm] = useState(false);

  const [todos, setTodos] = useState([]);

  const [libelle, setLibelle] = useState();
  const [date, setDate] = useState();

  const addTodosForm = () => {
    setTodoForm(!todoForm);
    setOldLibelle("");
    setOldDate("");
  };

  const delTodo = (libelle) => {
    const newTodos = todos.filter((item) => {
      return item.libelle !== libelle;
    });

    setTodos(newTodos);
  };

  const handleAddTodos = (libelle, date) => {
    let todo = {
      libelle: "",
      date: "",
    };

    todo.libelle = libelle;
    todo.date = date;

    const newTodos = todos.filter(item => {
      return item.libelle !== oldLibelle;
    });



    newTodos.push(todo);

    setTodos(newTodos);

    setTodoForm(!todoForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodos(libelle, date);
    setLibelle("");
    setDate("");
  };

  const [oldLibelle, setOldLibelle] = useState("");

  const [oldDate, setOldDate] = useState("");

  const preValueForm = (libelle, date) => {
    setOldLibelle(libelle);
    setOldDate(date);
    setLibelle(libelle);
    setDate(date);
    setTodoForm(!todoForm);
  };

  useEffect(() => {}, [todos]);

  return (
    <Layout styles="bg-slate-900 flex-row justify-around items-center">
      <div className="w-[50vw] flex flex-col justify-between items-center">
        <h3 className="text-white text-5xl">Mes Todos</h3>
        {todos.map((todo, index) => {
          return (
            <Todo
              libelle={todo.libelle}
              date={todo.date}
              key={index}
              delFunc={delTodo}
              modifFunc={preValueForm}
            />
          );
        })}
      </div>
      <div className="w-[30vw] flex flex-col justify-between items-center">
        {todoForm ? (
          <form
            className="w-[400px] h-[300px] bg-white flex flex-col justify-between items-center p-2 rounded-xl"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              defaultValue={oldLibelle}
              onChange={(event) => setLibelle(event.target.value)}
              className="w-full h-[50px] border border-black p-1"
              type="text"
              placeholder="Libelle"
            />
            <input
              defaultValue={oldDate}
              onChange={(event) => setDate(event.target.value)}
              className="w-full h-[50px] border border-black p-1"
              type="date"
              placeholder="Date"
            />
            <input
              className="w-full h-[50px] bg-red-600 text-white"
              type="submit"
            />
          </form>
        ) : (
          <div
            onClick={addTodosForm}
            className="hover:cursor-pointer w-[100px] bg-white rounded-full flex justify-center items-center text-black h-[100px] text-2xl"
          >
            +
          </div>
        )}
      </div>
    </Layout>
  );
}

export { Todos };
