import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Client from "./components/Client";
import { useState } from "react";
import Admin from "./components/Admin";
function App() {
  const [listOfClient, setListOfClient] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const listClient = (name, id, pas, money) => {
    setListOfClient([
      //!all the user in array
      ...listOfClient,
      { name: name, id: id, pas: pas, money: money, pay: [], cond: false },
    ]);
  };

  const getEdit = (name, id, pas, money, index) => {
    //! אדיט למשתמש אין פה הוצאות כדי לשמור אותם תמיד
    listOfClient[index].name = name;
    listOfClient[index].id = id;
    listOfClient[index].pas = pas;
    listOfClient[index].money = money;  
    setListOfClient([...listOfClient]);
  };
  const payment = (number, thing, index) => {
    //!מכניס את כל ההוצאות של המשתמש ומוריד מהסכום הכולל שלו  ץ
    let temp = { number: number, thing: thing };
    listOfClient[index].pay.push(temp);
    listOfClient[index].money = listOfClient[index].money - number;
    setListOfClient([...listOfClient]);
  };
  const changeCon = (index) => {
    //! אומר למנהל מתי לפתוח את האינפו של המשתמש
    listOfClient[index].cond = !listOfClient[index].cond;
    setListOfClient([...listOfClient]);
  };
  const closeCon = (indexList, number) => {
    //!סוגר את האינפו
    listOfClient[indexList].cond = false;
    listOfClient[indexList].money =
      listOfClient[indexList].money + Number(number);
    setListOfClient([...listOfClient]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <h1>BANK</h1>
        <Routes>
          <Route
            path="*"
            element={
              <SignIn
                listOfClient={listOfClient}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/SignUp"
            element={
              <SignUp
                listClient={listClient}
                listOfClient={listOfClient}
                getEdit={getEdit}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          {listOfClient.map((val, index) => {
            return (
              <Route
                path={`/Client/${index}/${val.name}`}
                element={
                  <Client
                    val={val}
                    payment={payment}
                    index={index}
                    listOfClient={listOfClient}
                    setListOfClient={setListOfClient}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
            );
          })}
          <Route
            path="/Admin"
            element={
              <Admin
                listOfClient={listOfClient}
                changeCon={changeCon}
                closeCon={closeCon}
              />
            }
          />
          {listOfClient.map((val, index) => {
            return (
              <Route
                path={`/Edit/${val.name}/${index}`}
                element={
                  <SignUp
                    val={val}
                    index={index}
                    getEdit={getEdit}
                    listOfClient={listOfClient}
                    listClient={listClient}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
