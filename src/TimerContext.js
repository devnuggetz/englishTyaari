import React, { createContext, useState } from 'react'

export const TimerContext = createContext();

export const TimerProvider=(props)=>{
    const [time_, setTime]= useState(5)
    return(
        <TimerContext.Provider value={[time_, setTime]}>
            {props.children}
        </TimerContext.Provider>
    )
}