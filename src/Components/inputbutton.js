import React, { Component } from 'react';
import "./inputbutton.css";
import logo1 from "../Image/baseline-input-24px.svg";
import dent from "../Image/dents.png";
import dentreverse from "../Image/dentsreverse.png";

const pStyle = {
    opacity: '0.6'
  };

const white = {
    color: 'white'
};

class Inputbutton extends Component {

    render() {
        return (
            <div className="entier">
                <img src={dent} style={pStyle} width="250px" class="animated infinite bounce" ></img>
                <form>
  <label >
    <p class="animated flipOutY duration-3s" style={white}>tape ton texte</p>
        <input type="text" placeholder="konami code" class="animated infinite jello" className="Barre2input"/>
            </label>
            
            </form>
            <img src={dentreverse} style={pStyle} width="250px" class="animated infinite slideInUp"></img>

             </div>
                    )
                     ;
         
             }
         
         }
         
export default Inputbutton;