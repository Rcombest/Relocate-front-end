const TodoItemCard = ({item, todolistId, user, handleDeleteItem, handleCompleteItem, handleRemoveItem }) => {
  return (
    <article> 
      <p>{item.name}</p>
			<button onClick={()=> handleDeleteItem(todolistId, item._id)}>Delete</button>
      {handleCompleteItem ? 
      <button onClick={()=> handleCompleteItem(todolistId, item._id)}>Add Item</button> 
      : 
      <button onClick={()=> handleRemoveItem(todolistId, item._id)}>Remove Item</button>}
    </article>
  )
  }

export default TodoItemCard