import { useState } from "react";


function Support() {
    
    let [sucessBox, setSuccessBox] = useState(false);
    let [todo, setTodo] = useState({ email: "", description: "" });

    let handleChangeAction = (e) => {
        let newTodo = { ...todo, email: e.target.value };
        setTodo(newTodo);
    };

    let handleChangeDescpAction = (e) => {
        let newTodo = { ...todo, description: e.target.value };
        setTodo(newTodo);
    };

    let addData = async () => {
        let url = `http://localhost:4000/addtodo?task=${todo.email}&description=${todo.description}`;
        await fetch(url);

        let newtodo = { email: "", description: "" };
        setTodo(newtodo);

        setSuccessBox(true);
    };

    return (
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-10 col-md-5 my-5 br-rad" >
          <h1
            className="text-center bg-dark text-warning"
          >
            Write us
          </h1>
          <input
        className="form-control"
        type="text"
        placeholder="Enter Email..."
        value={todo.task}
        onChange={handleChangeAction}
      />

      <textarea
        className="form-control my-2"
        cols="30"
        rows="3"
        placeholder="Write here..."
        value={todo.description}
        onChange={handleChangeDescpAction}
      ></textarea>

      <input type="button" className="bg-warning my-2" value="Submit" onClick={addData} />

      {sucessBox && (
        <div className="alert alert-success">Operation Success</div>
      )}
        </div>
      </div>
    );
}

export default Support;