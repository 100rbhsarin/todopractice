import { useEffect, useState } from "react"





export const TodoDate = ()=>{

    // useState(""): A state variable dateTime is created to store the current date and time. Initially, it's an empty string ("").
const [dateTime,setDateTime]=useState("")// setDateTime: This function updates the dateTime value.


useEffect(()=>{
    const interval = setInterval(()=>{
        // the setInterval function used to repeatedly excute a function or code block in fixed interval
        const now = new Date()
        const formatedDate = now.toLocaleDateString()
        const formateTime = now.toLocaleTimeString()

        setDateTime(`${formatedDate}- ${formateTime}`)
    }, 1000)// Both are combined and stored in the state variable dateTime using setDateTime.

     // Cleanup the interval on component unmount
     return ()=> clearInterval(interval) //What is clearInterval()?
    //  clearInterval() is a JavaScript function used to stop an interval that was previously created using setInterval(). When you use setInterval(), it repeatedly executes a given function at specified intervals (in milliseconds). To stop this behavior, you use clearInterval().
},[])// Empty dependency array ensures useEffect runs only once


    return(
        <>
        <h2>{dateTime}</h2>
        {/* Every second, as the state is updated by setInterval, React re-renders the component, displaying the latest date and time. */}
        </>
    )
}


// Key Concepts:
// #State Management (useState): Holds the dynamic value (dateTime).
// #Side Effects (useEffect): Sets up the interval and cleans it up.
// #Reactivity: React re-renders the component whenever state updates.
// #Cleanup (clearInterval): Prevents unnecessary operations after the component is gone.


// How It Works (Step-by-Step):

// 1.Component Mounts:
// The TodoDate component is rendered for the first time.
// useState initializes dateTime as an empty string.
// useEffect sets up the interval with setInterval.

// 2.Interval Execution:
// Every second, the setInterval callback runs:
// Gets the current date and time.
// Formats them using toLocaleDateString() and toLocaleTimeString().
// Updates the dateTime state using setDateTime.

// 3.Re-rendering:
// When setDateTime updates the state, React re-renders the component.
// The new dateTime value is displayed in the <h2> tag.


// 4.Component Unmounts:
// If the component is removed from the DOM, the cleanup function in useEffect runs, clearing the interval to stop updates.