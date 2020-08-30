import React from 'react'
import TimeTaken from './TimeTaken'

function Message({data, resetFunction, timeTaken}) {

    const renderMessage = () => {
        if(/success/i.test(data.status)) {
            return (
                <div>
                    <h2>Success! Congratulations on finding Falcone. King Shan is mighty pleased</h2>
                    <TimeTaken timeTaken={timeTaken}/>
                    <h2>Planet found: {data.planet_name}</h2>
                 </div>
            )
        } else {
            return (
                <div>
                    <h2>Oops! Sorry that didn't work :(</h2>
                 </div>
            )
        }
    }

    return (
        <>
            {renderMessage()}
            <div><button onClick={resetFunction}>Start Again</button></div>
        </>
    )
}

export default Message
