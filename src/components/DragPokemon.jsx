import React from "react";
import "../assets/css/DragPokemon.css";

class DragPokemon extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    return (
      <div className="display-cont">
        <div className="display-col-1">
          <div className="box-title">
            <h1>Fire</h1>
          </div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>

        <div className="display-col-2">
          <div className="box-title2">
            <h1>Water</h1>
          </div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>

        <div className="display-col-3">
          <div className="box-title3">
            <h1>Grass</h1>
          </div>

          <div className="img-drag">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
           
          </div>
        </div>
      </div>
    );
  }
}
export { DragPokemon };
