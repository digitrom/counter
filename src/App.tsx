import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";
import Input from "./Input";

function App() {
    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        getFromLocalStorageHandler()
    }, [])

    useEffect(() => {
        setToLocalStorageHandler()
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }

    const resHandler = () => {
        setValue(0)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
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
            <div className={'inputWrapper'}>
                <div className={'inputValue'}>
                    <div className={'text'}>max value:</div>
                    <div className={'input'}><Input value={value} callback={onchangeHandler}/></div>
                </div>
                <div className={'inputValue'}>
                    <div className={'text'}>start value:</div>
                    <div className={'input'}><Input value={value} callback={onchangeHandler}/></div>
                </div>
                <div className={'btnWrapper'}><Button name={'res'} callback={resHandler}/></div>
            </div>
            <div className={'counterWrapper'}>
                <div className={'value'}>
                    {value}
                </div>
                <div className="btnWrapper">
                    <div className={'btn'}><Button name={'inc'} callback={incHandler}/></div>
                    <div className={'btn'}><Button name={'set'} callback={setToLocalStorageHandler}/></div>
                </div>
            </div>
        </div>
    );
}

export default App;
