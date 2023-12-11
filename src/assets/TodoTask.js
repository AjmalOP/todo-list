import React, { useState , useRef } from 'react'



function TodoTask() {

    const [ value, setValue ] = useState([])
    const setInput = useRef(null)

    function list (){
        setInput && setValue([...value , {
            data : setInput.current.value
        }])

        setInput.current.value = ('')
    }
    function DeleteVal(intex) {
        const items = [...value]
        items.splice(intex,1)
        setValue(items)
    }

  return (
    <div className='mainDiv'>
        {value.map((val, index) => (
            <div className='listContainer'>
                <div className='listItem'>
                    <li>No { index + 1 } : { val.data }</li>
                </div>
                <div >
                    <button onClick={()=>DeleteVal(index)}  className='deleteButton'>Delete</button>
                </div>
            </div>
        ))}
        <input type='text' ref={setInput} className='inputTask'></input>
        <button onClick={list} className='taskAddButton'>Add Task</button>
    </div>
  )
}

export default TodoTask