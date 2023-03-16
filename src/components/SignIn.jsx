import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/signIn.css'
export default function SignIn(props) {
  const [nameSign, setNameSign] = useState("");
  const [pasSign, setPasSign] = useState("");
  const nav = useNavigate();
  const valid = (val, index) => {
    if (nameSign == "admin" && pasSign == "admin") {
      nav("/Admin");
    }
    if (nameSign == val.name && pasSign == val.pas) {
      props.setCurrentUser(true);
        nav(`/Client/${index}/${val.name}`);
    }
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="userName"
        onChange={(e) => {
          setNameSign(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPasSign(e.target.value);
        }}
      />
      <Link to={"/SignUp"}>Create new user</Link>
      <button
        onClick={() => {
          {
            props.listOfClient.map((val, index) => 
              valid(val, index));
          }
        }}
      >
        Enter
      </button>
    </div>
  );
}
