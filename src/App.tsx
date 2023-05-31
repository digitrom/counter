import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";

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
        // setToLocalStorageHandler()
    }

    const resHandler = () => {
        setValue(0)
        // clearLocalStorageHandler()

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

    const clearLocalStorageHandler = () => {
        localStorage.clear()
    }

    console.log(value)
    return (
        <div className="App">
            <div className="btn">
                <Button name={'inc'} callback={incHandler}/>
                <Button name={'res'} callback={resHandler}/>
                <Button name={'set'} callback={setToLocalStorageHandler}/>
                {/*<Button name={'get'} callback={getFromLocalStorageHandler}/>*/}
            </div>
            {value}
        </div>
    );
}

export default App;
