import React, { useState } from "react";

const InputElement = () => {
    const [inputText, setInputText] = useState("")
    const [historyList, setHistoryList] = useState([])

    return <div>
        <input
            onChange={e => {
                setInputText(e.target.value)
                setHistoryList([...historyList, e.target.value])
            }}
            placeholder="Enter some text here" />
        {inputText}
        <hr /><br />
        <ul>
            {historyList.map(rec => <div>{rec}</div>)}
        </ul>
    </div>
}

export default InputElement