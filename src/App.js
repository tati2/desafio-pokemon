import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Pokball from './img/Pokeball-icon.png'
import Pokeimg from './Pokeimg' 

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
})


class Pokemom extends Component{

  state = {
    listPoke: []
  }

  async componentDidMount() {
    const response = await api.get();
    
    this.setState({
      listPoke: response.data.results
    });
  }


  render(){
    return(
      <div>
        <div className="box-img-title">
          <img className="img-pokebola" src={Pokball} alt= ""/>
          <h1 className="title">Pokezeres</h1>
        </div>
        <div className="box-map">
          {this.state.listPoke.map((item, index) => (
            <div className="return-box-map" key={index}>
              <Pokeimg url={item.url}/>
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}






 

export default Pokemom;
