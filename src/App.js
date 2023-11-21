import React from 'react';
import s from "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info"
import List from "./components/List/List"
import Person from "./components/Person/Person";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import scammersInfo from "./data/scammersInfo";

const getRandomPerson = () => {
    let id = Math.floor(Math.random() * 5) + 1;
    let randomPerson;
    scammersInfo.map(person => {
        if (person.id === id)
            randomPerson = person;
    });

    return randomPerson;
}

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <div>
                    <Routes>
                        <Route path='/*' element={<Info mainPerson={getRandomPerson()}/>}/>
                        <Route path='/list' element={<List/>}/>
                        {scammersInfo.map((person, i) => <Route key={i} path={person.url} element={<Person info={person}/>}/>)}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
