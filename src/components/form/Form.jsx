import React, { useState } from 'react'
import '../css/form.css'

export const Form = ({ handleAddTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyCapture = (e) => {
        if (e.keyCode === 13) {
            handleAddTodo(inputValue);
            setInputValue('');
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <input type="text border" placeholder="Add Task" onKeyUpCapture={handleKeyCapture} className='form-control m-2' onChange={handleInputChange} name='todo' value={inputValue} />
    )
}