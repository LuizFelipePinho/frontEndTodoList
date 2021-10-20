import React, { useState, useEffect } from 'react'
import Card from '../Card/Card.js'
import './List.css'

const List = () => {
  const [todo, setTodo] = useState([]);
  
  useEffect(() => {
    getTodo();
  }, []);
  
  const urlApi = 'https://back-end-todo-list.herokuapp.com/todo';

  const getTodo = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    setTodo(data);
  }

  return (
    <div className="container">

      {
        todo.map((todo, index) => (
          <Card data={todo} key={index}/>
        ))
      }
    </div>
  )
}

export default List