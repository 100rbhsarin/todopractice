import { useState } from "react"




 export const TodoForm = ()=>{
    const  [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const handleInputChange=(value)=>{setInputValue(value)}

 
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        if(!inputValue) return
        if(task.includes(inputValue)) return
        setTask((Prev)=> console.log(Prev))
       }
     

    return(
        <>
        
        <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
        </>
    )
}