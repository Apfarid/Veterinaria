import React, { Component} from 'react';
import './bootstrap.min.css';
import Header from './Header';



class App extends Component {
  state = {

  }

  render(){

    return(
      <div className="container">
        <Header
          titulo = 'Administrador de Pacientes Veterinaria'
        />

      </div>
    )
  }
}

export default App;
