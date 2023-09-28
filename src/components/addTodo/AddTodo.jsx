import React, { useState } from "react";

export const AddTodo = ({ id, title, done }) => {

  const [addDone, setAddDone] = useState(done);

  const handleDone = () => {
    setAddDone(!addDone);
  }
  return (
    <div className={`d-flex justify-content-between col-11 shadow m-auto my-3 ${addDone ? "bg-success-subtle" : "bg-danger-subtle"}`}>
      <p className="m-auto">{title}</p>
      <button className={addDone ? "btn btn-success" : "btn btn-danger"} onClick={handleDone} id={id}>
        {addDone ? "Done" : "Not Done"}
      </button>
    </div>
  );
};