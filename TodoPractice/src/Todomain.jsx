import { useState } from "react"
import { TodoDate } from "./TodoDate"
import { TodoForm } from "./TodoForm"
import "./Todomain.css"

export const Todomain = ()=>{
const [task, setTask] = useState([])


  // const handleFormSubmit=(event)=>{
  //  event.preventDefault()
  //  if(!inputValue) return
  //  if(task.includes(inputValue)) return
  //  setTask((Prev)=> console.log(Prev))
  // }


    return(
      <>
      <section clas="main">
        <header className="parent-container">
                <h1>TODO APP</h1> 
                <br />
          <TodoDate />
        </header>
     
      <section>
       
          <div className="todo-form">
                <TodoForm />
                </div>
          
           </section>
           <section>
            
           </section>
      <section>
<ul>

</ul>
      </section>
      <button>clear</button>
      </section>
      </>
    )
  }