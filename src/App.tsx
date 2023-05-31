import React, {useState} from 'react';
import './App.css';
import Button from "./Button";

function App() {

    const [value, setValue] = useState<number>(0)
    console.log(value)
    const increment = () => {
        setValue(value + 1)
    }
    return (
        <div className="App">
            <Button name={'inc'} callback={increment}/>
        </div>
    );
}

export default App;
