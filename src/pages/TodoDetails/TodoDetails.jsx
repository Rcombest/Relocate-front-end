import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './TodoDetails.module.css'

import * as todolistService from '../../services/todoListService'

const TodoDetails = (props) => {
  const {id} = useParams()
  const [todolist, setTodolist] = useState(null)

  useEffect(() => {
    const fetchTodoList = async () => {
      const data = await todolistService.show(id)
      setTodolist(data)
    }
    fetchTodoList()
  }, [id])

  console.log('Todolist State:', todolist)
  console.log(props)

  return (
    todolist ? 
      <main className={styles.container}>
      <article>
        <header>
          <h1>{todolist.name}</h1>
        </header>
        <p>{todolist.details}</p>
        <Link to={`/todolists/${id}/edit`} state={todolist}>Edit</Link>
        <button onClick={() => props.handleDeleteTodoList(id)}>Delete</button>
      </article>
      <section>
        <h1>Todolist Items</h1>
      </section>
    </main>
    :
    <>
      <p>Loading...</p>
    </>
  );
}

export default TodoDetails