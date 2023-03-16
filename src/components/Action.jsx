import React from "react";
import { useState } from "react";

export default function Action(props) {
  const [num, setNum] = useState("");
  const [thing, setThing] = useState("");
  const done = () => {
    if (num == "" || thing == "") {
      alert('Fields are missing')
    } else {
      props.payment(num, thing, props.index);
      alert('succses')
      props.setFlag(false);
    }
  };
  return (
    <div className="formAction">
      <input 
        type="number"
        placeholder="desired amount"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <input 
        type="text"
        placeholder="what you want"
        onChange={(e) => {
          setThing(e.target.value);
        }}
      />
      <button
        onClick={() => {
          done();
        }}
      >
        done
      </button>
    </div>
  );
}
