import React from "react";
export default function Admin(props) {
  const remove = (index, indexList) => {
    props.listOfClient[indexList].pay.splice(index, 1);
  };
  return (
    <div>
      {props.listOfClient.map((val, indexList) => {
        return (
          <div>
            <h4>
              {val.name}-{val.id}
            </h4>
            <button
              onClick={() => {
                props.changeCon(indexList);
              }}
            >
              i
            </button>
            {val.cond &&
              val.pay.map((val, index) => {
                return (
                  <div>
                    <h3>
                      {val.number}-{val.thing}
                    </h3>
                    <button
                      onClick={() => {
                        remove(index, indexList);
                        props.closeCon(indexList, val.number);
                      }}
                    >
                      x
                    </button>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
