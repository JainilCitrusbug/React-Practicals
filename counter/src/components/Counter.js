import React, { useState, useEffect } from 'react'

function Counter() {

    const [count, setCount] = useState(1)
    const [revCount, setRevCount] = useState(5)
    const [stop, setStop] = useState(true)
    const [match, setMatch] = useState(false)

    const tick = () => {
        if (revCount === 2){
            setStop(false)
        }
        setCount(prevCount => stop?prevCount + 1:prevCount)
        setRevCount(prevCount => stop?prevCount - 1:prevCount)
    }
    
    useEffect(() => {
        count===revCount?setMatch(true):setMatch(false)
        const interval = setInterval(tick, match?5000:1000)
        return () => {
            clearInterval(interval)
        }
    })

    const resttime = () => {
        setCount(1)
        setRevCount(5)
        setStop(true)
    }

    return (
        <div>
            <h1>{count} -- {revCount}</h1>
            <button onClick={resttime}>Rest</button>
        </div>
    )
}

export default Counter