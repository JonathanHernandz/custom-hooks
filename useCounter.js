import { useState } from "react"
import { CounterApp } from "../01-useState/CounterApp"

export const useCounter = (initialValue = 1) =>{

    const [counter, setCounter] = useState(initialValue);

    const increment = ( value  = 1) =>{
        setCounter( counter + value);
    }

    const reset = ( ) =>{
        
        setCounter(initialValue)
    }
    const decrement = ( value = 1 ) =>{
        if(counter <= 0 ) return;
        setCounter( counter - value )
    }


    return{
        counter,
        increment,
        reset,
        decrement,
    }
}