import PropTypes from 'prop-types';
import React from 'react';

export default class Tomador extends React.Component {
  static propTypes = {
     // this is passed from the Rails view
    nombres: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    documento: PropTypes.string.isRequired,
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes


    this.state = { nombres: this.props.nombres, apellidos: this.props.apellidos, documento: this.props.documento };

  }

  updateNombres = (nombres) => {
    this.setState({ nombres });
  };

  updateApellidos = (apellidos) => {
    this.setState({ apellidos });
  };

 updateDatos =(documento) =>{

   this.setState({ documento });
   this.state.nombres="Nombres Buscados"
   this.state.apellidos="Apellidos Buscados"
 };


  render() {
    return (
      <div>
        <h3>
          Tomador: {this.state.nombres} {this.state.apellidos}
        </h3>
        <hr />
        <form >
          <label htmlFor="doc">
            Documento:
          </label>
          <input
            id="doc"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
            onBlur={(e) => this.updateDatos(e.target.value)}
          />
          <label htmlFor="name">
            Nombre:
          </label>
          <input
            id="nombres"
            type="text"
            value={this.state.nombres}
            onChange={(e) => this.updateNombres(e.target.value)}
          />
          <label htmlFor="apellidos">
            Apellidos:
          </label>
          <input
            id="apellidos"
            type="text"
            value={this.state.apellidos}
            onChange={(e) => this.updateApellidos(e.target.value)}
          />

          <label htmlFor="name">
            Email:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
          <label htmlFor="name">
            Phone:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
