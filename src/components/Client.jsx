import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Action from "./Action";

export default function Client(props) {
  const [flag, setFlag] = useState(false);
  const nav = useNavigate();
  const Balnce = () => {
    alert(props.val.money);
  };
  return (
    <div className="form">
      <h3>welcome {props.val.name}</h3>
      <button
        onClick={() => {
          Balnce();
        }}
      >
        Balnce
      </button>
      <button onClick={() => setFlag(!flag)}>Action</button>
      {flag && (
        <Action
          setFlag={setFlag}
          payment={props.payment}
          index={props.index}
          val={props.val}
        />
      )}
      <button
        onClick={() => {
          nav(`/Edit/${props.val.name}/${props.index}`);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          nav("/");
          props.setCurrentUser(false);
        }}
      >
        Exit
      </button>
    </div>
  );
}
