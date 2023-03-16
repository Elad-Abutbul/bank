import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pas, setPas] = useState("");
  const [conPas, setConPas] = useState("");
  const [money, setMoney] = useState("");
  const nav = useNavigate();
  const valid = () => {
    if (props.listOfClient.find((val) => val.id == id)) {
      alert("id exixt");
    } else if (props.listOfClient.find((val) => val.name == name)) {
      alert("name exixt");
    } else if (id.length != 9 || !Number(id)) {
      alert("id");
    } else if (name == "" || name.length < 4) {
      alert("name");
    } else if (pas.length < 6 || pas == "") {
      alert("pas");
    } else if (pas != conPas) {
      alert("conpas");
    } else if (money == "" || !Number(money)) {
      alert("money");
    } else {
      props.currentUser
        ? props.getEdit(name, id, pas, money, props.index)
        : props.listClient(name, id, pas, money);
      nav("/");
      props.setCurrentUser(false)
    }
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter ID"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter User Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPas(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => {
          setConPas(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Money"
        onChange={(e) => {
          setMoney(e.target.value);
        }}
      />
      <button
        onClick={() => {
          valid();
        }}
      >
        CREATE
      </button>
    </div>
  );
}
