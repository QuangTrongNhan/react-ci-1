import React from "react";
import "../assets/css/Header.css";

class Header extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    return (
      <div className="container">
        <div className="head-cont">
          <div className="col-1">
            <div className="img-cont">
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png"
                alt=""
              />
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
                alt=""
              />
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
                alt=""
              />
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"
                alt=""
              />
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-2">
            <div className="img-cont">
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png" alt=""/>
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png" alt=""/>
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/182.png" alt=""/>
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/186.png" alt=""/>
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/240.png" alt=""/>
            </div>
          </div>

          <div className="col-3">
            <div className="img-cont">
             <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png" alt=""/>
             <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png" alt=""/>
             <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/331.png" alt=""/>
             <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png" alt=""/>
             <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/341.png" alt=""/>
            </div>
          </div>
        </div>

       
      </div>
    );
  }
}
export { Header };
