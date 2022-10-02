import React, {useMemo, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const createUser = (name, surname) => {
    const user = {name, surname}
    console.log(user)
    return user
}

const Test = () => {
    const [person, setPerson] = useState({
        name: '',
        surname: ''
    })
    const [counter, setCounter] = useState(0)

    const user = useMemo(() => {createUser(person.name, person.surname)},[person])

    return (
        <div style={{ display: "flex", justifyContent: 'space-around', marginTop: 10}}>
            <div>
                <h1>{counter}</h1>
                <div>
                    <MyButton onClick={() => setCounter(counter + 1)}>Plus</MyButton>
                    <MyButton onClick={() => setCounter(counter - 1)}>Minus</MyButton>
                </div>
            </div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <div style={{ width: 300 }}>
                <MyInput
                    type="text"
                    value={person.name}
                    placeholder='Введите имя'
                    onChange={(e) => setPerson({...person, name: e.target.value})}
                />
                <MyInput
                    type="text"
                    value={person.surname}
                    placeholder='Введите фамилию'
                    onChange={(e) => setPerson({...person, surname: e.target.value})}
                />
                <MyButton
                    style={{ marginTop: 5}}
                    onClick={() => setPerson({name: '', surname: ''})}
                >
                    Clear
                </MyButton>
            </div>
        </div>
    );
};

export default Test;