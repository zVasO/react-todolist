import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

export default function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Sport", id: uuidv4()},
        {txt: "Coder avec React", id: uuidv4()},
    ])

    const [stateInput, setStateInput] = useState();

    

    const deleteElement = id => {
        //console.log(id)
        const filteredState =  dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

    const linkedInput = e => {
        setStateInput(e);
    }

    const addTodo = e => {
        e.preventDefault()
        const newArr = [...dataArr]

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();

        newArr.push(newTodo);
        setDataArr(newArr)
        setStateInput('')
    }

    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form onSubmit={e => addTodo(e)} action="" className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input 
                value={stateInput}
                onInput={e => linkedInput(e.target.value)}
                type="text" 
                name="" 
                id="todo" 
                className="form-control" />
                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire :</h2>
            <ul className="list-group">
                {dataArr.map((item, index) => {
                    return (
                        <Item
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>

    )
}