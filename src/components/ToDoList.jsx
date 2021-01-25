import React from "react";
import "../assets/css/ToDoList.css";
import "../ultis/ultis";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="cont-user">
          <div className="display-user">
            <img src="./img/user.png" alt="icon user" />
            <i class="fas fa-user"></i>
            <h1>User</h1>
            <h1>Log Out</h1>
          </div>
        </div>

        <div className="cont-toDoList">
          <div className="todo-box">
            <div className="header-todo">
                <h1>Header</h1>
            </div>
            <div className="content-todo">
                <h3>go to sleep</h3>
            </div>
            <div className="todo-box-bottom">
              <div className="btn-manipulation-todo">DONE</div>
              <div className="btn-manipulation-todo">UPDATE</div>
              <div className="btn-manipulation-todo">REMOVE</div>
            </div>
          </div>

          <div className="todo-box">
            <div className="header-todo">
                <h1>Header</h1>
            </div>
            <div className="content-todo">
                <h3>go to sleep</h3>
            </div>
            <div className="todo-box-bottom">
              <div className="btn-manipulation-todo">DONE</div>
              <div className="btn-manipulation-todo">UPDATE</div>
              <div className="btn-manipulation-todo">REMOVE</div>
            </div>
          </div>

          <div className="todo-box">
            <div className="header-todo">
                <h1>Header</h1>
            </div>
            <div className="content-todo">
                <h3>go to sleep</h3>
            </div>
            <div className="todo-box-bottom">
              <div className="btn-manipulation-todo">DONE</div>
              <div className="btn-manipulation-todo">UPDATE</div>
              <div className="btn-manipulation-todo">REMOVE</div>
            </div>
          </div>

          <div className="todo-box">
            <div className="header-todo">
                <h1>Header</h1>
            </div>
            <div className="content-todo">
                <h3>go to sleep</h3>
            </div>
            <div className="todo-box-bottom">
              <div className="btn-manipulation-todo">DONE</div>
              <div className="btn-manipulation-todo">UPDATE</div>
              <div className="btn-manipulation-todo">REMOVE</div>
            </div>
          </div>

          
        </div>
      </div>
    );
  }
}

export { ToDoList };
