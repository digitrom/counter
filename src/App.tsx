import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";
import Input from "./Input";

function App() {
    const [value, setValue] = useState<number>(0)

    useEffect(()=> {
        getFromLocalStorageHandler()
    }, [])

    useEffect(()=> {
        setToLocalStorageHandler()
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }

    const resHandler = () => {
        setValue(0)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value) )
    }

    const getFromLocalStorageHandler = () => {
        // debugger
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    // const clearLocalStorageHandler = () => {
    //     localStorage.clear()
    // }

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = JSON.parse(e.currentTarget.value)
        setValue(inputValue)
    }

    console.log(value)
    return (
        <div className="App">
            <div className="btn">
                <Input value={value} callback={onchangeHandler}/>
                <Button name={'inc'} callback={incHandler}/>
                <Button name={'res'} callback={resHandler}/>
                <Button name={'set'} callback={setToLocalStorageHandler}/>
            </div>
            {value}
        </div>
    );
}

export default App;
