import "./Todomain.css"

export const Todomain = ()=>{
    return(
      <>
      <section>
        <header className="parent-container">
                <h1>TODO APP</h1> 
                <br />
          <h2>date-time</h2>
        </header>
     
      <section>
        <div>
            <form>
                <input type="text" />
            </form>
            <button>ADD TASK</button>
        </div>
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